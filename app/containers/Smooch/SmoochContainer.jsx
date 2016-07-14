import React from "react";
import * as smoochUtils from "../../utils/smoochUtils";

smoochUtils.init("bob@example.com");

class SmoochContainer extends React.Component {
	render() {
		return (
			<div>Smooch Container</div>
		)
	}
}

export default SmoochContainer;