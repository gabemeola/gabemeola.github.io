import React, { PropTypes } from "react";

function LandingIcon(props) {
	return (
		<div className="landing-icon"
		     onClick={props.onIconExpand}
		></div>
	)
}

LandingIcon.propTypes = {
	onIconExpand: PropTypes.func.isRequired
};

LandingIcon.defaultProps = {
	onIconExpand: false
};

export default LandingIcon;