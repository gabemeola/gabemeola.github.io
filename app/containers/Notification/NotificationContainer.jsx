import React from "react";
import NotificationIcon from "../../components/Notification/NotificationIcon";

class NotificationContainer extends React.Component {
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