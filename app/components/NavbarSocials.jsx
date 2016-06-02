import React from "react";
import FacebookIcon from "../../assets/Facebook.svg";
import TwitterIcon from "../../assets/Twitter.svg";
import GithubIcon from "../../assets/Github.svg";

function NavbarSocials(props) {
	return(
		<div className="navbar-socials">
			<img className="navbar-socials-facebook" src={FacebookIcon} alt="Facebook Link"/>
			<img className="navbar-socials-twitter" src={TwitterIcon} alt="Twitter Link"/>
			<img className="navbar-socials-github" src={GithubIcon} alt="Github Link"/>
		</div>
	)
}

export default NavbarSocials;