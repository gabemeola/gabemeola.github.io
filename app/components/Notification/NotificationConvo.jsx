import React, { PropTypes } from "react";
import { ConvoInit } from "components";

function NotificationConvo({isNotificationOpen}) {
	return(
		<div className={"notification-convo " + (isNotificationOpen ? "notification-convo--open" : "")}>
			<ConvoInit/>
		</div>
	)
}

NotificationConvo.propTypes = {
	isNotificationOpen: PropTypes.bool.isRequired
};

export default NotificationConvo;