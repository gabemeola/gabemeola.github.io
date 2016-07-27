import React from "react";
import NewConvo from "../Smooch/NewConvo";
import SmoochInput from "../Smooch/SmoochInput";
import { getSmooch, postSmooch } from "../../utils/smoochUtils";
import { handleNewUserMessage, convoFlow } from "./botUtils";

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
		postSmooch(text).then(() => {
			getSmooch().then((res) => {
				this.setState({  // Updating Current Convo to match with Smooch's
					conversation: res.conversation.messages
				})
			})
		});
	}
	componentDidMount() {
		setTimeout(() => convoFlow.bind(this)(), 3000);  // Delay to start Convo flow to wait for page load
	}
	render() {
		return(
			<div className="smooch-chat">
				<NewConvo
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