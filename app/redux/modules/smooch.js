import { emailValidate, blankString } from "utils/validations";
import { getSmooch, postSmooch, checkExistingSmoochStore,
	initSmooch, updateSmooch, createNewThread, removeInitThread } from "utils/smoochUtils";
import { increaseUnreadCount } from './chat';

const UPDATE_CONVO = 'UPDATE_CONVO';
const INCREASE_SCRIPT_MARKER = 'INCREASE_SCRIPT_MARKER';
const SET_USERNAME = 'SET_USERNAME';
const SET_USEREMAIL = 'SET_USEREMAIL';
const SET_SMOOCHID = 'SET_SMOOCHID';
const INPUT_ENABLE = 'INPUT_ENABLE';
const INPUT_DISABLE = 'INPUT_DISABLE';
const SMOOCH_ENABLE = 'SMOOCH_ENABLE';


let name = '';
const getName = () => name;
const script = [
	`Hello, my name is GabeBot.`,
	`What is your name?`,
	`Great ${getName()}! Feel free to take a look at my current work!`,
	`This conversation is persistent, but what is your email in case we get disconnected?`
];

/* Action Creators */
const initialState = {
	conversation: [],
	userName: undefined,
	userEmail: undefined,
	convoScript: script,
	inputDisabled: true,
	scriptMarker: 0,
	isSmoochInit: false,
	unreadCount: 0,
	smoochId: ''
};

function setUserName(userName) {
	return {
		type: SET_USERNAME,
		userName
	}
}

function setUserEmail(userEmail) {
	return {
		type: SET_USEREMAIL,
		userEmail
	}
}

function setSmoochId(smoochId) {
	return {
		type: SET_SMOOCHID,
		smoochId
	}
}

function updateConvo(newConvo) {
	return {
		type: UPDATE_CONVO,
		newConvo
	}
}

function increaseScriptMarker() {
	return {
		type: INCREASE_SCRIPT_MARKER
	}
}

function inputEnable() {
	return {
		type: INPUT_ENABLE
	}
}

function inputDisable() {
	return {
		type: INPUT_DISABLE
	}
}

function smoochEnable() {
	return {
		type: SMOOCH_ENABLE
	}
}

/* Thunks */
export function startConvo() {
	return function(dispatch, getState) {
		checkExistingSmoochStore().then((res) => {
			res !== false
				? getSmooch().then((messages) => {
					dispatch(smoochEnable());
					dispatch(setSmoochId(res));
					dispatch(updateConvo(removeInitThread(messages)));
					dispatch(inputEnable());
				})
				: dispatch(botFlow());  // Delay to start Convo flow to wait for page load
		});
	}
}

export function newMessagesHook() {
	return function(dispatch, getState) {
		getSmooch().then((messages) => {
			const { conversation } = getState().smooch;
			// Mixed the conversations
			const formattedMessages = removeInitThread(messages);
			const newConvo = [ ...conversation, ...formattedMessages];
			dispatch(updateConvo(newConvo)); // Updating Current Convo to match with Smooch's
			dispatch(increaseUnreadCount()); // Increase the unread count.
		})
	}
}

// Handle any user input and directs it accordingly
export function newPost(post) {
	return function(dispatch, getState) {
		const { isSmoochInit } = getState().smooch;

		isSmoochInit === true // Post message to bot convo or smooch convo
			? dispatch(userPostSmooch(post))
			: dispatch(userPostBot(post))
	}
}

function userPostSmooch(text) {
	return function(dispatch, getState) {
		postSmooch(text).then(() => {
			getSmooch().then((messages) => {
				const { conversation } = getState().smooch;
				// Mixed the conversations
				const formattedMessages = removeInitThread(messages);
				const newConvo = [ ...conversation, ...formattedMessages];
				dispatch(updateConvo(newConvo)); // Updating Current Convo to match with Smooch's
			})
		});
	}
}

function userPostBot(text) { // Each time a user posts a message
	return function(dispatch, getState) {
		const state = getState().smooch;
		const { scriptMarker, inputDisabled, convoScript } = state;

		function pushUserInput() {
			const state = getState().smooch;
			const {  conversation, userName } = state;
			const newThread = createNewThread(text, userName, 'appUser');
			const newConvo = [...conversation, newThread];
			dispatch(updateConvo(newConvo));
			dispatch(inputDisable());
		}

		function continueFlow() {
			const lastScript = convoScript.length - 1;

			if (!inputDisabled) {
				pushUserInput();
				dispatch(increaseScriptMarker());
				if (lastScript !== scriptMarker) {
					setTimeout(() => dispatch(botFlow()), 1500);
				} else {
					dispatch(initNewSmooch());
					console.log("Smooch Initiated for: ", text);
				}
			}
		}

		function invalidEmail() {
			const { conversation } = getState().smooch;
			setTimeout(() => {
				const text = "Invalid Email. Please type just your email address.";
				const newThread = createNewThread(text, "GabeBot", "appMaker");
				const newConvo = [...conversation, newThread];
				dispatch(updateConvo(newConvo));
				dispatch(inputEnable());
			}, 1500)
		}

		function invalidName() {
			const { conversation } = getState().smooch;
			setTimeout(() => {
				const text = "Sorry, I didn't catch that.";
				const newThread = createNewThread(text, "GabeBot", "appMaker");
				const newConvo = [...conversation, newThread];
				dispatch(updateConvo(newConvo));
				dispatch(inputEnable());
			}, 1500)
		}

		switch (scriptMarker) {
			case 1:
				if (!blankString(text)) {
					name = text;
					dispatch(setUserName(text));
					continueFlow();
				} else {
					pushUserInput();
					invalidName();
				}
				break;
			case 3:
				if (blankString(text)) {
					invalidName();
				} else {
					if (emailValidate(text)) {
						dispatch(setUserEmail(text.toLowerCase()));
						continueFlow();
					} else {
						pushUserInput();
						invalidEmail();
					}
				}
				break;
			default:
				continueFlow();
		}
	}
}

export function botFlow() { // Start Point
	return function (dispatch, getState) {
		const state = getState().smooch;
		const { scriptMarker } = state;

		function pushBotThread(marker) {
			const state = getState().smooch;
			const { convoScript, conversation } = state;
			const newThread = createNewThread(convoScript[marker], "GabeBot", "appMaker");
			const newConvo = [...conversation, newThread];
			dispatch(updateConvo(newConvo));
			dispatch(inputEnable());
		}

		switch (scriptMarker) {
			case 0:
			case 2:
				pushBotThread(scriptMarker);
				dispatch(increaseScriptMarker());
				setTimeout(() => pushBotThread(scriptMarker + 1), 3000);
				break;
			default:
				pushBotThread(scriptMarker)
		}
	}
}

export function initNewSmooch() {
	return function(dispatch, getState) {
		const state = getState().smooch;
		const { userEmail, userName, conversation } = state;

		const newUserSlackMessage = `${userName} at ${userEmail} just finished up with the bot. Handing it off to Human Gabe!`;
		dispatch(inputEnable());
		console.warn("lastMessageScript Ran");
		initSmooch(userEmail).then((res) => {  // Initializes new Smooch User
			dispatch(setSmoochId(res.smoochUserEmail));
			updateSmooch(userEmail, userName).then(() => { // Adds User Email and Name to Smooch Database
				postSmooch(newUserSlackMessage).then(() => { // Send New User Smooch Email to Business Logic
					getSmooch().then((messages) => { // Concats Old Bot Conversation with new Smooch Conversation
						const formattedMessages = removeInitThread(messages);
						const jointConversation = [...conversation, ...formattedMessages];
						dispatch(smoochEnable());
						dispatch(updateConvo(jointConversation));
					})
				})
			})
		})
	}
}


export default function smooch(state = initialState, action) {
	switch (action.type) {
		case SET_USERNAME:
			return {
				...state,
				userName: action.userName
			};
		case SET_USEREMAIL:
			return {
				...state,
				userEmail: action.userEmail
			};
		case SET_SMOOCHID:
			return {
				...state,
				smoochId: action.smoochId
			};
		case UPDATE_CONVO:
			return {
				...state,
				conversation: action.newConvo
			};
		case INCREASE_SCRIPT_MARKER:
			return {
				...state,
				scriptMarker: state.scriptMarker + 1
			};
		case INPUT_ENABLE:
			return {
				...state,
				inputDisabled: false
			};
		case INPUT_DISABLE:
			return {
				...state,
				inputDisabled: true
			};
		case SMOOCH_ENABLE:
			return {
				...state,
				isSmoochInit: true
			};
		default:
			return state;
	}
}