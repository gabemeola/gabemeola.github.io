import React from "react";
import facebookIcon from "../../../assets/Facebook.svg";
import twitterIcon from "../../../assets/twitter.svg";
import githubIcon from "../../../assets/github.svg";

function NavbarSocials(props) {
	return(
		<div className="navbar-socials">
			<div className="navbar-socials-flexbox">
				<a className="navbar-socials-facebook" href="//facebook.com/gabemeola" target="_blank">
					<img src={facebookIcon} alt="Facebook Link"/>
				</a>
				<a className="navbar-socials-twitter" href="//twitter.com/c7abe" target="_blank">
					<img src={twitterIcon} alt="Twitter Link"/>
				</a>
				<a className="navbar-socials-github" href="//github.com/gabemeola" target="_blank">
					<img src={githubIcon} alt="Github Link"/>
				</a>
			</div>
		</div>
	)
}

export default NavbarSocials;