import React, { Component } from "react";
import { SmoochChats, SmoochInput } from "components";
import { getSmooch, postSmooch, checkExistingSmoochStore } from "../../utils/smoochUtils";
import { handleNewUserMessage, convoFlow } from "./botUtils";

const script = [
	`Hello, my name is GabeBot.`,
	`What is your name?`,
	`Great! Feel free to take a look at my current work!`,
	`This conversation is persistent, but what is your email in case we get disconnected?`
];

class ConvoInit extends Component {
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
		postSmooch(text).then(() => {
			getSmooch().then((res) => {
				this.setState({  // Updating Current Convo to match with Smooch's
					conversation: res.conversation.messages
				})
			})
		});
	}
	componentDidUpdate() {
		const chatElem = document.getElementsByClassName("smooch-chat");
		for (let i = 0; i < chatElem.length; i++) { // Scroll to Bottom of chat on update
			chatElem[i].scrollTop = chatElem[i].scrollHeight
		}
	}
	componentDidMount() {
		checkExistingSmoochStore().then((res) => {
			res ?
				getSmooch().then((res) => {
					this.setState({  // Updating Current Convo to match with Smooch's
						isSmoochInit: true,
						conversation: res.conversation.messages
					})
				}) :
				setTimeout(() => convoFlow.bind(this)(), 3000);  // Delay to start Convo flow to wait for page load
		});

		const chatElem = document.getElementsByClassName("smooch-chat");
		for (let i = 0; i > chatElem.length; i++) { // Scroll to Bottom of chat on update
			chatElem[i].scrollTop = chatElem[i].scrollHeight
		}
	}
	render() {
		return(
			<div className="smooch">
				<SmoochChats
					conversation={this.state.conversation}
				/>
				{!this.state.isSmoochInit ?
					<SmoochInput
						onTextSubmit={(text) => setTimeout(() => handleNewUserMessage.bind(this)(text), 600)}
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