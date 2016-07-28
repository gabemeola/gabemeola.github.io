import React, { Component } from "react";
import NotificationIcon from "../../components/Notification/NotificationIcon";

class NotificationContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			unread: 0,
			isOpen: false
		}
	}
	render() {
		return(
			<div className="notification-wrapper">
				<NotificationIcon
					unread={this.state.unread}
				/>
			</div>
		)
	}
}

export default NotificationContainer;