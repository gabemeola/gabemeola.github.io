import React from "react";
import NewConvo from "../Smooch/NewConvo";
import SmoochInput from "../Smooch/SmoochInput";

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
			userName: "Bob",
			convoScript: script,
			inputDisabled: false,
			scriptMarker: 0
		}
	}
	handleNewBotMessage(marker) {
		const { convoScript, conversation } = this.state;
		let newConversation = conversation.slice(0);
		const newThread = {
			text: convoScript[marker],
			name: "GabeBot",
			role: "appMaker"
		};
		newConversation.push(newThread);
		this.setState({
			conversation: newConversation
		})
	}
	handleNewUserMessage(text) {
		const { inputDisabled, conversation, scriptMarker } = this.state;
		if(!inputDisabled) {
			let newConversation = conversation.slice(0);
			const newThread = {
				text,
				name: this.state.userName,
				role: "appUser"
			};
			newConversation.push(newThread);
			this.setState({
				conversation: newConversation,
				scriptMarker: scriptMarker + 1,
				inputDisabled: true
			});
			setTimeout(() => this.convoFlow(), 1500);
		}
	}
	convoFlow() {
		const { convoScript, conversation, scriptMarker } = this.state;
		let newConversation = conversation.slice(0);

		const pushThread = (marker) => {
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
					pushThread(scriptMarker);
					this.setState({
						scriptMarker: scriptMarker + 1
					});
					setTimeout(() => pushThread(scriptMarker + 1), 5000);
					break;
				default:
					pushThread(scriptMarker)
			}
		};

		threadChecker();
	}
	componentDidMount() {
		this.convoFlow()
	}
	render() {
		return(
			<div className="smooch-chat">
				<NewConvo
					conversation={this.state.conversation}
				/>
				{/*<button onClick={() => this.handleNewBotMessage(0)}>Test Button</button>*/}
				<SmoochInput
					onTextSubmit={(text) => this.handleNewUserMessage(text)}
				  isDisabled={this.state.inputDisabled}
				/>
			</div>
		)
	}
}

export default ConvoInit;