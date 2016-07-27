import React from "react";
import NotificationIcon from "../../components/Notification/NotificationIcon";

class NotificationContainer extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return(
			<div>
				<NotificationIcon/>
			</div>
		)
	}
}

export default NotificationContainer;