import React, { PropTypes } from "react";
import { Link } from "react-router";

function Menu(props) {
	return(
		<div className="menu-nav-wrapper">
			<div className="menu-nav">
				<Link to="about" onClick={props.onNavbarSwitch}>
					<h2>About me</h2>
				</Link>
				<div className="menu-nav-works-wrapper">
					<h2>Work</h2>
					<Link to="work/cosmeticlaserexchange" onClick={props.onNavbarSwitch}>
						<h3 className="menu-nav-works">Cosmetic Laser Exchange</h3>
					</Link>
					<Link to="work/5starlegal" onClick={props.onNavbarSwitch}>
						<h3 className="menu-nav-works">5 Star Legal</h3>
					</Link>
					<Link to="work/cam-taylor" onClick={props.onNavbarSwitch}>
						<h3 className="menu-nav-works">Cameron & Taylor Wedding</h3>
					</Link>
				</div>
			</div>
		</div>
	)
}

Menu.propTypes = {
	onNavbarSwitch: PropTypes.func.isRequired
};

export default Menu;