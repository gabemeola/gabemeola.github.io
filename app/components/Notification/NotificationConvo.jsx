import React, { PropTypes } from "react";
import ConvoInit from "../Landing/ConvoInit";

function NotificationConvo({isNotificationOpen}) {
	return(
		<div className={"notification-convo " + (isNotificationOpen ? "notification-convo--open" : "")}>
			<ConvoInit/>
		</div>
	)
}

NotificationConvo.propTypes = {
	isNotificationOpen: PropTypes.func.isRequired
};

export default NotificationConvo;