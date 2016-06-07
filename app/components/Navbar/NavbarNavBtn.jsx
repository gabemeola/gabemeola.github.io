import React, { PropTypes } from "react";
import navbarIcon from "../../../assets/navbar.svg";
import { Link } from "react-router";

function NavbarNavBtn(props) {
	return(
		<div className="navbar-navbtn">
			<a onClick={props.onNavbarOpen}>
				<img src={navbarIcon} alt="Navigation Icon"/>
			</a>
		</div>
	)
}

NavbarNavBtn.propTypes = {
	onNavbarOpen: PropTypes.func.isRequired,
	isNavbarOpen: PropTypes.bool.isRequired
};

export default NavbarNavBtn;