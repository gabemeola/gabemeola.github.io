import React from "react";
import NavbarContainer from "../../containers/Navbar/NavbarContainer";
import MenuContainer from "../../containers/Menu/MenuContainer";

class Main extends React.Component {
	constructor() {
		super();
		this.state = {
			navbarOpen: false
		}
	}
	//Set up component to not re-render ever navbar open change
	handleNavbarSwitch() {
		this.state.navbarOpen ?
			this.setState({
				navbarOpen: false
			}) :
			this.setState({
				navbarOpen: true
			});
	}
	handleNavbarClose() {
		if(this.state.navbarOpen) {
			this.handleNavbarSwitch();
		}
	}
	render() {
		return(
			<div className="main-container">
				<NavbarContainer
					onNavbarSwitch={() => this.handleNavbarSwitch()}
					isNavbarOpen={this.state.navbarOpen}
					onNavbarClose={() => this.handleNavbarClose()}
				/>
				<div className={"main-container-content " + (this.state.navbarOpen ? "main-container-content--blurred" : "")}>
					{this.props.children}
				</div>
				<MenuContainer
					visible={this.state.navbarOpen}
					onNavbarSwitch={() => this.handleNavbarSwitch()}
				/>
			</div>
		)
	}
}

export default Main;