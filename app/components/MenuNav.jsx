import React from "react";
import { Link } from "react-router";

function Menu(props) {
	return(
		<div className="menu-nav-wrapper">
			<div className="menu-nav">
				<Link to="/">
					<h2>About me</h2>
				</Link>
				<div className="menu-nav-works-wrapper">
					<h2>Work</h2>
					<Link to="work/cosmeticlaserexchange">
						<h3 className="menu-nav-works">Cosmetic Laser Exchange</h3>
					</Link>
					<Link to="work/5starlegal">
						<h3 className="menu-nav-works">5 Star Legal</h3>
					</Link>
					<Link to="work/cam-taylor">
						<h3 className="menu-nav-works">Cameron & Taylor Wedding</h3>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Menu;