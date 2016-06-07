import React from "react";
import NavbarHeader from "../../components/Navbar/NavbarHeader";
import NavbarNavBtn from "../../components/Navbar/NavbarNavBtn";

class NavbarContainer extends React.Component {
	constructor() {
		super();
		this.state = {
			navbarOpen: false
		}
	}
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
			<div className="navbar">
				<NavbarHeader/>
				<NavbarNavBtn
					onNavbarOpen={() => this.handleNavbarOpen()}
				  isNavbarOpen={this.state.navbarOpen}
				/>
			</div>
		)
	}
}

export default NavbarContainer;