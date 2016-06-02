import React from "react";
import NavbarContainer from "../container/NavbarContainer";

class Main extends React.Component {
	render() {
		return(
			<div className="main-container">
				<NavbarContainer/>
				{this.props.children}
			</div>
		)
	}
}

export default Main;