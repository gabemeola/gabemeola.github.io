import React, { PropTypes } from "react";

function LandingIcon(props) {
	return (
		<div className={"landing-icon " + (props.isIconExpanded ? "landing-icon-expanded" : "")}
		     onClick={props.onIconExpand}
		></div>
	)
}

LandingIcon.propTypes = {
	onIconExpand: PropTypes.func.isRequired,
	isIconExpanded: PropTypes.bool.isRequired
};

LandingIcon.defaultProps = {
	isIconExpanded: false
};

export default LandingIcon;