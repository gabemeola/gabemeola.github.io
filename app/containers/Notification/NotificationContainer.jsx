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
	isOpenToggle() {
		this.setState({ isOpen: !this.state.isOpen })
	}
	render() {
		return(
			<div className="notification-wrapper">
				<NotificationIcon
					unread={this.state.unread}
				  isOpenToggle={() => this.isOpenToggle()}
				/>
			</div>
		)
	}
}

export default NotificationContainer;