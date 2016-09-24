import React, { Component } from "react";
import { ChatIcon, ChatConvo } from 'components';

class ChatContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			unread: 0,
			isNotificationOpen: false
		}
	}
	isOpenToggle() {
		this.setState({ isNotificationOpen: !this.state.isNotificationOpen })
	}
	render() {
		return(
			<div className="notification-wrapper" style={this.props.route !== "/" ? { visibility: "visible", opacity: "1" } : { visibility: "hidden", opacity: "0" }}>
				<ChatIcon
					unread={this.state.unread}
					isNotificationOpenToggle={() => this.isOpenToggle()}
				/>
				<ChatConvo
					isChatOpen={this.state.isNotificationOpen}
				/>
			</div>
		)
	}
}

export default ChatContainer;