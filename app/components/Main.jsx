import React from "react";
import NavbarContainer from "../containers/NavbarContainer";

class Main extends React.Component {
	render() {
		return(
			<div className="main-container">
				<NavbarContainer/>
				<div className="main-container-content">
					{this.props.children}
				</div>
			</div>
		)
	}
}

export default Main;