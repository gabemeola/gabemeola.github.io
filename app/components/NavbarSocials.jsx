import React from "react";
import FacebookIcon from "../../assets/Facebook.svg";
import TwitterIcon from "../../assets/Twitter.svg";
import GithubIcon from "../../assets/Github.svg";

function NavbarSocials(props) {
	return(
		<div className="navbar-socials">
			<div className="navbar-socials-flexbox">
				<a className="navbar-socials-facebook" href="//facebook.com/gabemeola" target="_blank">
					<img src={FacebookIcon} alt="Facebook Link"/>
				</a>
				<a className="navbar-socials-twitter" href="//twitter.com/c7abe" target="_blank">
					<img src={TwitterIcon} alt="Twitter Link"/>
				</a>
				<a className="navbar-socials-github" href="//github.com/gabemeola" target="_blank">
					<img src={GithubIcon} alt="Github Link"/>
				</a>
			</div>
		</div>
	)
}

export default NavbarSocials;