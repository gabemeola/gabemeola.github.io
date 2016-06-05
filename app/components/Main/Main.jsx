import React from "react";
import NavbarContainer from "../../containers/Navbar/NavbarContainer";
import MenuContainer from "../../containers/Menu/MenuContainer";

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