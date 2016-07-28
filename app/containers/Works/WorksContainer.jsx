import React, { Component, PropTypes } from "react";
import CosmeticLaserExchange from "../../components/Works/CosmeticLaserExchange";
import FiveStarLegal from "../../components/Works/FiveStarLegal";
import CamTaylor from "../../components/Works/CamTaylor";

class WorksContainer extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		window.scrollTo(0,0)
	}
	componentDidUpdate() {
		window.scrollTo(0,0)
	}
	handleNoWorkMatch() {
		this.context.router.push("/about");
	}
	render() {
		const { work } = this.props.routeParams;

		switch (work) {
			case "cosmeticlaserexchange" :
				return <CosmeticLaserExchange/>;
			case "fivestarlegal" :
				return <FiveStarLegal/>;
			case "camtaylor" :
				return <CamTaylor/>;
			default:
				this.handleNoWorkMatch();
				return null;
		}
	}
}

WorksContainer.contextTypes = {
	router: PropTypes.object.isRequired
};

export default WorksContainer;