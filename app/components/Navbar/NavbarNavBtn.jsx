import React, { PropTypes } from "react";

function NavbarNavBtn(props) {
	return(
		<div onClick={props.onNavbarSwitch} className={"navbar-navbtn "  + (props.isNavbarOpen ? "navbar-navbtn--open" : "")}>
			<div className={"navbar-navbtn-img1 " + (props.isNavbarOpen ? "navbar-navbtn-img1--open" : "")}></div>
			<div className={"navbar-navbtn-img2 " + (props.isNavbarOpen ? "navbar-navbtn-img2--open" : "")}></div>
		</div>
	)
}

NavbarNavBtn.propTypes = {
	onNavbarSwitch: PropTypes.func.isRequired,
	isNavbarOpen: PropTypes.bool.isRequired
};

export default NavbarNavBtn;