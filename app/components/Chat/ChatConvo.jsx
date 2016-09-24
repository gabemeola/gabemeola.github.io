import React, { PropTypes } from "react";
import { ConvoInit } from "components";

function ChatConvo({isChatOpen}) {
	return(
		<div className={"notification-convo " + (isChatOpen ? "notification-convo--open" : "")}>
			<ConvoInit/>
		</div>
	)
}

ChatConvo.propTypes = {
	isChatOpen: PropTypes.bool.isRequired
};

export default ChatConvo;