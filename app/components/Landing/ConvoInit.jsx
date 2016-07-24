import React from "react";
import NewConvo from "../Smooch/NewConvo";
import SmoochInput from "../Smooch/SmoochInput";
import { initSmooch, getSmooch, postSmooch, updateSmooch } from "../../utils/smoochUtils";
import { emailValidate, blankString } from "../../utils/validations";

const script = [
	`Hello, my name is GabeBot.`,
	`What is your name?`,
	`Great! Feel free to take a look at my current work!`,
	`This conversation is persistent, but what is your email in case we get disconnected?`
];

class ConvoInit extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			conversation: [],
			userName: undefined,
			userEmail: undefined,
			convoScript: script,
			inputDisabled: false,
			scriptMarker: 0,
			isSmoochInit: false
		}
	}
	handleSmoochPost(text) {
		let newConversation = this.state.conversation.slice(0);
		postSmooch(text).then(() => {
			getSmooch().then((res) => {
				const jointConversation = newConversation.concat(res.conversation.messages);
				this.setState({
					conversation: jointConversation
				})
			})
		});
	}
	initNewSmooch() {
		const { userEmail, userName } = this.state;
		console.warn("lastMessageScript Ran");
		initSmooch(userEmail).then(() => {
			updateSmooch(userEmail, userName);
			this.setState({
				isSmoochInit: true
			})
		});
	}
	handleNewUserMessage(text) {
		const {inputDisabled, conversation, scriptMarker, convoScript} = this.state;

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
					setTimeout(() => this.convoFlow(), 1500);
				} else {
					this.initNewSmooch();
					this.setState({ inputDisabled: false });
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
					if (emailValidate(text)) {
						this.setState({ userEmail: text });
						console.log("Smooch Initiated for: ", text);
						continueFlow();
					} else {
						invalidEmail();
					}
					break;
				default:
					continueFlow();
			}
		};
		userThreadChecker();
	}
	convoFlow() {
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
	}
	componentDidMount() {
		setTimeout(() => this.convoFlow(), 3000);
	}
	render() {
		return(
			<div className="smooch-chat">
				<NewConvo
					conversation={this.state.conversation}
				/>
				{!this.state.isSmoochInit ?
					<SmoochInput
						onTextSubmit={(text) => setTimeout(() => this.handleNewUserMessage(text), 600)}
						isDisabled={this.state.inputDisabled}
					/> :
					<SmoochInput
						onTextSubmit={(text) => this.handleSmoochPost(text)}
						isDisabled={false}
					/>
				}
			</div>
		)
	}
}

export default ConvoInit;