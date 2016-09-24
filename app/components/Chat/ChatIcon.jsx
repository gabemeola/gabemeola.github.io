import React, { PropTypes } from "react";

function ChatIcon({unread, chatSwitch}) {
	return (
		<div className="notification-icon-wrapper" onClick={chatSwitch}>
			<div className="notification-icon">
				{unread}
			</div>
		</div>
	)
}

ChatIcon.propTypes = {
	unread: PropTypes.number.isRequired,
	chatSwitch: PropTypes.func.isRequired
};

export default ChatIcon;