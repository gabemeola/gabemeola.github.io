import React from "react";
import navbarIcon from "../../assets/navbar.svg";
import { Link } from "react-router";

function NavbarNavBtn(props) {
	return(
		<div className="navbar-navbtn">
			<Link to="menu">
				<img src={navbarIcon} alt="Navigation Icon"/>
			</Link>
		</div>
	)
}

export default NavbarNavBtn;