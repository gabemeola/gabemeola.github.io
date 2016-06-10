import React from "react";
import LandingIcon from "./LandingIcon";

function Landing(props) {
	return(
		<div className="landing-wrapper">
			<h1><div className="underline">Hello!<div className="underline-mark"></div></div> - Gabe</h1>
			<LandingIcon/>
		</div>
	)
}

export default Landing;