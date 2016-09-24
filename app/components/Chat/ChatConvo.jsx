import React, { PropTypes } from "react";
import { ConvoInit } from "components";

function ChatConvo({isNotificationOpen}) {
	return(
		<div className={"notification-convo " + (isNotificationOpen ? "notification-convo--open" : "")}>
			<ConvoInit/>
		</div>
	)
}

ChatConvo.propTypes = {
	isNotificationOpen: PropTypes.bool.isRequired
};

export default ChatConvo;