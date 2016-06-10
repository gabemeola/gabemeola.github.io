import React from "react";
import Landing from "../../components/Landing/Landing";
import LandingIcon from "../../components/Landing/LandingIcon";

class LandingContainer extends React.Component {
	render() {
		return(
			<div className="landing">
				<Landing/>
				<LandingIcon/>
			</div>
		)
	}
}

export default LandingContainer;