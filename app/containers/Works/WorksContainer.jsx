import React, { PropTypes } from "react";
import CosmeticLaserExchange from "../../components/Works/CosmeticLaserExchange";
import FiveStarLegal from "../../components/Works/FiveStarLegal";
import CamTaylor from "../../components/Works/CamTaylor";

class WorksContainer extends React.Component {
	constructor(props) {
		super(props);
	}
	handleNoWorkMatch() {
		this.context.router.push("/about");
	}
	render() {
		const { work } = this.props.routeParams;

		if(work === "cosmeticlaserexchange") return <CosmeticLaserExchange/>;
		if(work === "fivestarlegal") return <FiveStarLegal/>;
		if(work === "camtaylor") return <CamTaylor/>;
		else {
			this.handleNoWorkMatch();
			return null;
		}
	}
}

WorksContainer.contextTypes = {
	router: PropTypes.object.isRequired
};

export default WorksContainer;