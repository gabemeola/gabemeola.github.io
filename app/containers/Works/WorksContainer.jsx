import React from "react";
import CosmeticLaserExchange from "../../components/Works/CosmeticLaserExchange";
import FiveStarLegal from "../../components/Works/FiveStarLegal";
import CamTaylor from "../../components/Works/CamTaylor";

class WorksContainer extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		const { work } = this.props.routeParams;

		if(work === "cosmeticlaserexchange") return <CosmeticLaserExchange/>;
		else if(work === "fivestarlegal") return <FiveStarLegal/>;
		else if(work === "camtaylor") return <CamTaylor/>;
	}
}

export default WorksContainer;