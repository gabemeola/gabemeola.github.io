import React, { PropTypes } from "react";
import NavbarSocials from "./NavbarSocials";
import { Link } from "react-router";

function NavbarHeader ({navClose}) {
	return(
		<div className="navbar-header-wrapper">
			<Link to="/" onClick={navClose}>
				<div className="navbar-header-block"></div>
				<h1 className="navbar-header-text"><span style={{fontWeight: 700}}>g</span><span className="navbar-header-text--hidden">abemeola.com</span></h1>
			</Link>
			<NavbarSocials/>
		</div>
	)
}

NavbarHeader.propTypes = {
	navClose: PropTypes.func.isRequired
};

export default NavbarHeader;