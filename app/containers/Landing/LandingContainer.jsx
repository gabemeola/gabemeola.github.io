import React from "react";
import Landing from "../../components/Landing/Landing";
import LandingIcon from "../../components/Landing/LandingIcon";

class LandingContainer extends React.Component {
	constructor() {
		super();
		this.state = {
			iconExpanded: false
		}
	}
	shouldComponentUpdate(nextProps, nextState) {
		return nextState.iconExpanded !== this.state.iconExpanded
	}
	handleIconExpand() {
		this.setState({
			iconExpanded: true
		})
	}
	render() {
		return(
			<div className="landing">
				<Landing/>
				<LandingIcon 
					onIconExpand={() => this.handleIconExpand()}
				/>
			</div>
		)
	}
}

export default LandingContainer;