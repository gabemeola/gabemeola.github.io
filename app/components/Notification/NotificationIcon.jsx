import React, { PropTypes } from "react";

function NotificationIcon({unread}) {
	return (
		<div className="notification-icon-wrapper">
			<div className="notification-icon">
				{unread}
			</div>
		</div>
	)
}

NotificationIcon.propTypes = {
	unread: PropTypes.number.isRequired
}

export default NotificationIcon;