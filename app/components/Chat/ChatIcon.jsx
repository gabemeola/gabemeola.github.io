import React, { PropTypes } from "react";

function ChatIcon({unread, isNotificationOpenToggle}) {
	return (
		<div className="notification-icon-wrapper" onClick={isNotificationOpenToggle}>
			<div className="notification-icon">
				{unread}
			</div>
		</div>
	)
}

ChatIcon.propTypes = {
	unread: PropTypes.number.isRequired,
	isNotificationOpenToggle: PropTypes.func.isRequired
};

export default ChatIcon;