import React from "react";
import NewConvo from "../Smooch/NewConvo";

class ConvoInit extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			conversation: [],
			convoScript: [
				"Hello, my name is GabeBot.",
				"What is your name?",
				"Great! Feel free to take a look at my current work!",
				"This conversation is persistent, but what is your email in case we get disconnected?"
			]
		}
	}
	handleNewBotMessage(marker) {
		const { convoScript, conversation } = this.state;
		let newConversation = conversation.slice(0);
		let newThread = {
			text: convoScript[marker],
			name: "GabeBot",
			role: "appMaker"
		};

		newConversation.push(newThread);
		this.setState({
			conversation: newConversation
		})

	}
	render() {
		return(
			<div className="smooch-chat">
				<NewConvo
					conversation={this.state.conversation}
				/>
				<button onClick={() => this.handleNewBotMessage(0)}>Test Button</button>
			</div>
		)
	}
}

export default ConvoInit;