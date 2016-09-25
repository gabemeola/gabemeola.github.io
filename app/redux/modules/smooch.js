import { emailValidate, blankString } from "utils/validations";
import { getSmooch, postSmooch, checkExistingSmoochStore, initSmooch, updateSmooch } from "utils/smoochUtils";
import { handleNewUserMessage, convoFlow } from "components/Landing/botUtils";

const UPDATE_CONVO = 'UPDATE_CONVO';
const INCREASE_SCRIPT_MARKER = 'INCREASE_SCRIPT_MARKER';
const SET_USERNAME = 'SET_USERNAME';
const SET_USEREMAIL = 'SET_USEREMAIL';

let name = '';
const script = [
	`Hello, my name is GabeBot.`,
	`What is your name?`,
	`Great ${name}! Feel free to take a look at my current work!`,
	`This conversation is persistent, but what is your email in case we get disconnected?`
];

/* Action Creators */
const initialState = {
	conversation: [],
	userName: undefined,
	userEmail: undefined,
	convoScript: script,
	inputDisabled: false,
	scriptMarker: 0,
	isSmoochInit: false
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

function updateConvo(newConvo, inputDisabled) {
	return {
		type: UPDATE_CONVO,
		newConvo,
		inputDisabled
	}
}

function increaseScriptMarker() {
	return {
		type: INCREASE_SCRIPT_MARKER
	}
}

/* Thunks */
export function newUserMessage(text) { // Each time a user posts a message
	return function(dispatch, getState) {
		const state = getState().smooch;
		const { scriptMarker, inputDisabled } = state;

		function pushUserInput() {
			let newConvo = state.conversation.slice(0);
			const newThread = {
				text,
				name: state.userName,
				role: "appUser"
			};
			newConvo.push(newThread);
			dispatch(updateConvo(newConvo, true));
		}

		function continueFlow() {
			const lastScript = state.convoScript.length - 1;

			if (!inputDisabled) {
				pushUserInput();
				dispatch(increaseScriptMarker());
				if (lastScript !== scriptMarker) {
					setTimeout(() => convoFlow(), 1500);
				} else {
					initNewSmooch();
				}
			}
		}

		function invalidEmail() {
			pushUserInput();
			setTimeout(() => {
				let newConvo = state.conversation.slice(0);
				const newThread = {
					text: "Invalid Email. Please type just your email address.",
					name: "GabeBot",
					role: "appMaker"
				};
				newConvo.push(newThread);
				dispatch(updateConvo(newConvo, false));
			}, 1500)
		}

		function invalidName() {
			pushUserInput();
			setTimeout(() => {
				let newConvo = state.conversation.slice(0);
				const newThread = {
					text: "Sorry, I didn't catch that.",
					name: "GabeBot",
					role: "appMaker"
				};
				newConvo.push(newThread);
				dispatch(updateConvo(newConvo, false));
			}, 1500)
		}

		switch (scriptMarker) {
			case 1:
				if (!blankString(text)) {
					dispatch(setUserName(text));
					continueFlow();
				} else {
					invalidName();
				}
				break;
			case 3:
				if (blankString(text)) {
					invalidName();
				} else {
					if (emailValidate(text)) {
						dispatch(setUserEmail(text.toLowerCase()));
						console.log("Smooch Initiated for: ", text);
						continueFlow();
					} else {
						invalidEmail();
					}
				}
				break;
			default:
				continueFlow();
		}
	}
}

export function initNewSmooch() {
	return function(dispatch, getState) {
		const state = getState().smooch;
		const { userEmail, userName } = state;

		const newUserSlackMessage = `${userName} at ${userEmail} just finished up with the bot. Handing it off to Human Gabe!`;
		this.setState({inputDisabled: false});
		console.warn("lastMessageScript Ran");
		initSmooch(userEmail).then(() => {  // Initializes new Smooch User
			updateSmooch(userEmail, userName).then(() => { // Adds User Email and Name to Smooch Database
				postSmooch(newUserSlackMessage).then(() => { // Send New User Smooch Email to Business Logic
					getSmooch().then((res) => { // Concats Old Bot Conversation with new Smooch Conversation
						let newConversation = this.state.conversation.slice(0);
						res.conversation.messages.pop();
						const jointConversation = newConversation.concat(res.conversation.messages);
						this.setState({
							conversation: jointConversation,
							isSmoochInit: true
						})
					})
				})
			})
		})
	}
}

export default function chat(state = initialState, action) {
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
		case UPDATE_CONVO:
			return {
				...state,
				conversation: action.newConvo,
				inputDisabled: action.inputDisabled
			};
		case INCREASE_SCRIPT_MARKER:
			return {
				...state,
				scriptMarker: state.scriptMarker + 1
			};
		default:
			return state;
	}
}