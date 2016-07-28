import React, { Component } from "react";
import NotificationIcon from "../../components/Notification/NotificationIcon";
import NotificationConvo from "../../components/Notification/NotificationConvo";

class NotificationContainer extends Component {
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
			<div className="notification-wrapper">
				<NotificationIcon
					unread={this.state.unread}
					isNotificationOpenToggle={() => this.isOpenToggle()}
				/>
				<NotificationConvo
					isNotificationOpen={this.state.isNotificationOpen}
				/>
			</div>
		)
	}
}

export default NotificationContainer;