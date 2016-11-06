import React, { PropTypes } from "react";

function ChatIcon({unreadCount, chatSwitch}) {
	return (
		<div className="notification-icon-wrapper" onClick={chatSwitch}>
			<div className="notification-icon">
				{unreadCount}
			</div>
		</div>
	)
}

ChatIcon.propTypes = {
	unreadCount: PropTypes.number.isRequired,
	chatSwitch: PropTypes.func.isRequired
};

export default ChatIcon;