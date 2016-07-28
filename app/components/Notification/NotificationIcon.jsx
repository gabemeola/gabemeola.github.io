import React, { PropTypes } from "react";

function NotificationIcon({unread, isNotificationOpenToggle}) {
	return (
		<div className="notification-icon-wrapper" onClick={isNotificationOpenToggle}>
			<div className="notification-icon">
				{unread}
			</div>
		</div>
	)
}

NotificationIcon.propTypes = {
	unread: PropTypes.number.isRequired,
	isNotificationOpenToggle: PropTypes.func.isRequired
};

export default NotificationIcon;