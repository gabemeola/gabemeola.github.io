import React, { PropTypes } from "react";
import { Link } from "react-router";

function Menu({navSwitch}) {
	return(
		<div className="menu-nav">
			{/*<Link to="about" onClick={navSwitch} activeClassName="about--active">*/}
				{/*<h2 className="about">About me</h2>*/}
			{/*</Link>*/}
			<a disabled="true">
				<h2 style={{'cursor': 'not-allowed', 'color': '#c6c9cb'}} className="about">About me</h2>
			</a>
			<div className="menu-nav-works-wrapper">
				<h2>Work</h2>
				<Link to="/works/cosmeticlaserexchange" activeClassName="menu-nav-works--active" onClick={navSwitch}>
					<h3 className="menu-nav-works">Cosmetic Laser Exchange</h3>
				</Link>
				<Link to="/works/fivestarlegal" activeClassName="menu-nav-works--active" onClick={navSwitch}>
					<h3 className="menu-nav-works">5 Star Legal</h3>
				</Link>
				<Link to="/works/camtaylor" activeClassName="menu-nav-works--active" onClick={navSwitch}>
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
	navSwitch: PropTypes.func.isRequired
};

export default Menu;