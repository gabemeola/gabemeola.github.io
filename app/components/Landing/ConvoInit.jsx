import React from "react";

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
			name: "Gabe Meola",
			role: "appMaker"
		};

		newConversation.push(convoScript[0]);

	}
	render() {
		const convo = this.state.conversation.map((info, index) => {
			return (
				<p
					key={index}
					className={"smooch-chat-thread " + (info.role == "appUser" ? "smooch-chat-thread--appUser" : "smooch-chat-thread--appMaker")}
				>
					{info.text}<span className="smooch-chat-name">{info.name}</span>
				</p>
			);
		});

		return(
			<div className="smooch-chat">
				{convo}
				<button onClick={() => this.handleTestButton()}>Test Button</button>
			</div>
		)
	}
}

export default ConvoInit;