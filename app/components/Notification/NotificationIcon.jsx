import React, { PropTypes } from "react";

function NotificationIcon({unread, isOpenToggle}) {
	return (
		<div className="notification-icon-wrapper" onClick={isOpenToggle}>
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