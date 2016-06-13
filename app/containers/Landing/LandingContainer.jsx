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
		});
		setTimeout(() => {
			this.context.router.push(`/about`)
		}, 800)
	}
	render() {
		return(
			<div className="landing">
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
	router: React.PropTypes.object.isRequired
};

export default LandingContainer;