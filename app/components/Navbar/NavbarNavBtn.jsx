import React, { PropTypes } from "react";

function NavbarNavBtn({navSwitch, isNavOpen}) {
	return(
		<div className="navbar-navbtn-wrapper" onClick={navSwitch} onTouchStart={() => {}}>
			<div className={"navbar-navbtn "  + (isNavOpen ? "navbar-navbtn--open" : "")}>
				<div className={"navbar-navbtn-img1 " + (isNavOpen ? "navbar-navbtn-img1--open" : "")}></div>
				<div className={"navbar-navbtn-img2 " + (isNavOpen ? "navbar-navbtn-img2--open" : "")}></div>
			</div>
		</div>
	)
}

NavbarNavBtn.propTypes = {
	navSwitch: PropTypes.func.isRequired,
	isNavOpen: PropTypes.bool.isRequired
};

export default NavbarNavBtn;