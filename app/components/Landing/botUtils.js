import { emailValidate, blankString } from "utils/validations";
import { initSmooch, getSmooch, postSmooch, updateSmooch } from "utils/smoochUtils";


export const handleNewUserMessage = (text) => {
	const { inputDisabled, conversation, scriptMarker, convoScript } = this.state;

	const pushUserInput = () => {
		let newConversation = conversation.slice(0);
		const newThread = {
			text,
			name: this.state.userName,
			role: "appUser"
		};
		newConversation.push(newThread);
		this.setState({
			conversation: newConversation,
			inputDisabled: true
		});
	};

	const continueFlow = () => {
		const lastScript = convoScript.length - 1;
		if (!inputDisabled) {
			pushUserInput();
			this.setState({ scriptMarker: scriptMarker + 1 });
			if (lastScript !== scriptMarker) {
				setTimeout(() => convoFlow(), 1500);
			} else {
				initNewSmooch();
			}
		}
	};

	const userThreadChecker = () => {
		const invalidEmail = () => {
			pushUserInput();
			setTimeout(() => {
				let newConversation = this.state.conversation.slice(0);
				const newThread = {
					text: "Invalid Email. Please type just your email address.",
					name: "GabeBot",
					role: "appMaker"
				};
				newConversation.push(newThread);
				this.setState({
					conversation: newConversation,
					inputDisabled: false
				});
			}, 1500)
		};

		const invalidName = () => {
			pushUserInput();
			setTimeout(() => {
				let newConversation = this.state.conversation.slice(0);
				const newThread = {
					text: "Sorry, I didn't catch that.",
					name: "GabeBot",
					role: "appMaker"
				};
				newConversation.push(newThread);
				this.setState({
					conversation: newConversation,
					inputDisabled: false
				});
			}, 1500)
		};

		switch (scriptMarker) {
			case 1:
				if(!blankString(text)) {
					this.setState({
						userName: text
					});
					continueFlow();
				} else {
					invalidName();
				}
				break;
			case 3:
				if(blankString(text)) {
					invalidName();
				} else {
					if (emailValidate(text)) {
						this.setState({userEmail: text.toLowerCase()});
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
	};

	userThreadChecker();
};



export const convoFlow = () => {
	const { convoScript, conversation, scriptMarker } = this.state;
	let newConversation = conversation.slice(0);

	const pushBotThread = (marker) => {
		const newThread = {
			text: convoScript[marker],
			name: "GabeBot",
			role: "appMaker"
		};
		newConversation.push(newThread);
		this.setState({
			conversation: newConversation,
			inputDisabled: false
		});
	};

	const threadChecker = () => {
		switch (scriptMarker) {
			case 0:
			case 2:
				pushBotThread(scriptMarker);
				this.setState({
					scriptMarker: scriptMarker + 1
				});
				setTimeout(() => pushBotThread(scriptMarker + 1), 3000);
				break;
			default:
				pushBotThread(scriptMarker)
		}
	};

	threadChecker();
};



export const initNewSmooch = () => {
	const { userEmail, userName } = this.state;
	const newUserSlackMessage = `${userName} at ${userEmail} just finished up with the bot. Handing it off to Human Gabe!`;
	this.setState({ inputDisabled: false });
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
};