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
	handleNavbarOpen() {
		this.state.navbarOpen ?
			this.setState({
				navbarOpen: false
			}) :
			this.setState({
				navbarOpen: true
			});
		console.log(this.state.navbarOpen);
	}
	render() {
		return(
			<div className="main-container">
				<NavbarContainer
					onNavbarOpen={() => this.handleNavbarOpen()}
					handleNavbarOpen={this.state.navbarOpen}
				/>
				<div className={"main-container-content " + (this.state.navbarOpen ? "main-container-content--blurred" : "")}>
					{this.props.children}
				</div>
				<MenuContainer
					visible={this.state.navbarOpen}
				/>
			</div>
		)
	}
}

export default Main;