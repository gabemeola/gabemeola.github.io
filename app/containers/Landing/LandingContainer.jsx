import React, { Component, PropTypes } from "react";
import { Landing, LandingIcon, ConvoInit } from 'components';

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
		// this.setState({
		// 	iconExpanded: true
		// });
		// setTimeout(() => {
		// 	this.context.router.push(`/about`)
		// }, 1000)
	}
	render() {
		return(
			<div className="landing">
				{/*<ConvoInit/>*/}
				<Landing/>
				<LandingIcon
					onIconExpand={() => this.handleIconExpand()}
				  isIconExpanded={this.state.iconExpanded}
				/>
			</div>
		)
	}
}

LandingContainer.contextTypes = {
	router: PropTypes.object.isRequired
};

export default LandingContainer;