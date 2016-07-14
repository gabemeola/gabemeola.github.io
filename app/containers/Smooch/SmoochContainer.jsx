import React from "react";
import SmoochCore from 'smooch-core';

let smooch = new SmoochCore({
	appToken: "3nf36hcp4oj7ab8f52uvmkleb"
});

class SmoochContainer extends React.Component {
	render() {
		return (
			<div>Smooch Container</div>
		)
	}
}

export default SmoochContainer;