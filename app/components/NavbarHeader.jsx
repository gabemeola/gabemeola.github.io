import React from "react";
import NavbarSocials from "../components/NavbarSocials";
import { Link } from "react-router";

function NavbarHeader (props) {
	return(
		<div className="navbar-header-wrapper">
			<div className="navbar-header-block"></div>
			<Link to="/">
				<h1 className="navbar-header-text"><span style={{fontWeight: 700}}>g</span>abemeola.com</h1>
			</Link>
			<NavbarSocials/>
		</div>
	)
}

export default NavbarHeader;