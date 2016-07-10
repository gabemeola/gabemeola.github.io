import React, { PropTypes } from "react";

function NavbarNavBtn({onNavbarSwitch, isNavbarOpen}) {
	return(
		<div className="navbar-navbtn-wrapper" onClick={onNavbarSwitch}>
			<div className={"navbar-navbtn "  + (isNavbarOpen ? "navbar-navbtn--open" : "")}>
				<div className={"navbar-navbtn-img1 " + (isNavbarOpen ? "navbar-navbtn-img1--open" : "")}></div>
				<div className={"navbar-navbtn-img2 " + (isNavbarOpen ? "navbar-navbtn-img2--open" : "")}></div>
			</div>
		</div>
	)
}

NavbarNavBtn.propTypes = {
	onNavbarSwitch: PropTypes.func.isRequired,
	isNavbarOpen: PropTypes.bool.isRequired
};

export default NavbarNavBtn;