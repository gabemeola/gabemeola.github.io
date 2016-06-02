import React from "react";
import NavbarSocials from "../components/NavbarSocials";

function NavbarHeader (props) {
	return(
		<div className="navbar-header-wrapper">
			<div className="navbar-header-block"></div>
			<h1 className="navbar-header-text"><span style={{fontWeight: 700}}>g</span>abemeola.com</h1>
			<NavbarSocials/>
		</div>
	)
}

export default NavbarHeader;