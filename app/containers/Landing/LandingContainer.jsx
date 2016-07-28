import React, { Component, PropTypes } from "react";
import SmoochContainer from "../Smooch/SmoochContainer";
import LandingIcon from "../../components/Landing/LandingIcon";
import ConvoInit from "../../components/Landing/ConvoInit";

class LandingContainer extends Component {
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
		});
		setTimeout(() => {
			this.context.router.push(`/about`)
		}, 1000)
	}
	render() {
		return(
			<div className="landing">
				<ConvoInit/>
				{/*<LandingIcon */}
					{/*onIconExpand={() => this.handleIconExpand()}*/}
				  {/*isIconExpanded={this.state.iconExpanded}*/}
				{/*/>*/}
			</div>
		)
	}
}

LandingContainer.contextTypes = {
	router: PropTypes.object.isRequired
};

export default LandingContainer;