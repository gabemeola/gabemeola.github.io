import React from "react";
import NewConvo from "../Smooch/NewConvo";
import SmoochInput from "../Smooch/SmoochInput";
import { initSmooch } from "../../utils/smoochUtils";
import { emailValidate } from "../../utils/validations";

const script = [
	"Hello, my name is GabeBot.",
	"What is your name?",
	"Great! Feel free to take a look at my current work!",
	"This conversation is persistent, but what is your email in case we get disconnected?"
];

class ConvoInit extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			conversation: [],
			userName: undefined,
			convoScript: script,
			inputDisabled: false,
			scriptMarker: 0
		}
	}
	handleNewUserMessage(text) {
		const {inputDisabled, conversation, scriptMarker} = this.state;

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
			if (!inputDisabled) {
				pushUserInput();
				this.setState({ scriptMarker: scriptMarker + 1 });
				setTimeout(() => this.convoFlow(), 1500);
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

			switch (scriptMarker) {
				case 1:
					this.setState({
						userName: text
					});
					continueFlow();
					break;
				case 3:
					if (emailValidate(text)) {
						// initSmooch(text);
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
				{/*<button onClick={() => this.handleNewBotMessage(0)}>Test Button</button>*/}
				<SmoochInput
					onTextSubmit={(text) => setTimeout(() => this.handleNewUserMessage(text), 200)}
				  isDisabled={this.state.inputDisabled}
				/>
			</div>
		)
	}
}

export default ConvoInit;