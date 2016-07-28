import React, { Component } from "react";
import NavbarContainer from "../../containers/Navbar/NavbarContainer";
import MenuContainer from "../../containers/Menu/MenuContainer";
import preventScroll from "../../utils/preventScroll";

class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			navbarOpen: false
		}
	}
	shouldComponentUpdate(nextProps, nextState) {
		if(nextProps.location.pathname !== this.props.location.pathname) { // If Route Changes, update
			return true
		} else {   // If Route Doesn't change then check to see if navbar state changed
			return nextState.navbarOpen !== this.state.navbarOpen
		}
	}
	componentDidMount() {
		window.onload = () => { // Wait for CSS and externals to load
			setTimeout(() => {
				let elem = document.getElementById("loading");
				elem.parentNode.removeChild(elem);
			}, 3000);
		};
	}
	handleNavbarSwitch() {
		let { navbarOpen } = this.state;
		this.setState({
			navbarOpen: !navbarOpen
		});
		navbarOpen ? preventScroll.enable() : preventScroll.disable()
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