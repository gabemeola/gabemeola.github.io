import React, { PropTypes } from "react";
import NavbarSocials from "./NavbarSocials";
import { Link } from "react-router";

function NavbarHeader (props) {
	return(
		<div className="navbar-header-wrapper">
			<Link to=" home" onClick={props.onNavbarClose}>
				<div className="navbar-header-block"></div>
				<h1 className="navbar-header-text"><span style={{fontWeight: 700}}>g</span>abemeola.com</h1>
			</Link>
			<NavbarSocials/>
		</div>
	)
}

NavbarHeader.propTypes = {
	onNavbarClose: PropTypes.func.isRequired
};

export default NavbarHeader;