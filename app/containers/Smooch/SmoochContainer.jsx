import React, { Component } from "react";
const socket = io(SERVER_ADDRESS);
import { initSmooch, postSmooch, getSmooch } from 'utils/smoochUtils';
import { SmoochChats, SmoochInput } from 'components';


class SmoochContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			smoochConversation: [],
			convoStarted: false
		}
	}
	componentWillMount() {
		initSmooch("bob@example.com")
			.then((res) => {
				if(res.appUser.conversationStarted === true) {
					getSmooch().then((res) => {
						this.setState({
							smoochConversation: res.conversation.messages,
							convoStarted: true
						})
					})
				}
			});
	}
	handleTextSubmit(text) {
		postSmooch(text)
			.then(() => {
				getSmooch().then((res) => {
					this.setState({
						smoochConversation: res.conversation.messages
					});
					window.scrollTo(0,document.body.scrollHeight);
				});
			});
	}
	render() {
		return (
			<div className="smooch">
				<SmoochChats
					conversation={this.state.smoochConversation}
				/>
				<br/>
				{/*{this.state.smoochConversation.forEach((item) => console.warn(item))}*/}
				<SmoochInput
					onTextSubmit={(text) => this.handleTextSubmit(text)}
				/>
			</div>
		)
	}
}

export default SmoochContainer;