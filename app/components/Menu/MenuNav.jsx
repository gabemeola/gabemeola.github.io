import React, { PropTypes } from "react";
import { Link } from "react-router";

function Menu(props) {
	return(
		<div className="menu-nav">
			<Link to="about" onClick={props.onNavbarSwitch} activeClassName="about--active">
				<h2 className="about">About me</h2>
			</Link>
			<div className="menu-nav-works-wrapper">
				<h2>Work</h2>
				<Link to="works/cosmeticlaserexchange" activeClassName="menu-nav-works--active" onClick={props.onNavbarSwitch}>
					<h3 className="menu-nav-works">Cosmetic Laser Exchange</h3>
				</Link>
				<Link to="works/fivestarlegal" activeClassName="menu-nav-works--active" onClick={props.onNavbarSwitch}>
					<h3 className="menu-nav-works">5 Star Legal</h3>
				</Link>
				<Link to="works/camtaylor" activeClassName="menu-nav-works--active" onClick={props.onNavbarSwitch}>
					<h3 className="menu-nav-works">Cameron & Taylor Wedding</h3>
				</Link>
			</div>
			<div className="menu-nav-contact">
				<h4>Contact Me</h4>
				<p>
					<a href="mailto:hey@gabemeola.com" className="underline">hey@gabemeola.com<div className="underline-mark"></div></a>
					&nbsp;or&nbsp;
					<a href="tel:3852019950" className="underline">385.201.9950<div className="underline-mark"></div></a>
				</p>
			</div>
		</div>
	)
}

Menu.propTypes = {
	onNavbarSwitch: PropTypes.func.isRequired
};

export default Menu;