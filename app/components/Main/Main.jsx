import React from "react";
import NavbarContainer from "../../containers/Navbar/NavbarContainer";
import MenuContainer from "../../containers/Menu/MenuContainer";
import preventScroll from "../../utils/preventScroll";

class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			navbarOpen: false
		}
	}
	shouldComponentUpdate(nextProps, nextState) {
		if(nextProps.location.pathname !== this.props.location.pathname) { // If Route Changes, update
			return true
		} else if(nextState.isLoading !== this.state.isLoading) {
			return true
		} else {   // If Route Doesn't change then check to see if navbar state changed
			return nextState.navbarOpen !== this.state.navbarOpen
		}
	}
	componentDidMount() {
		window.onload = () => { // Wait for CSS to load and externals
			setTimeout(() => {
				let elem = document.getElementById("loading");
				elem.parentNode.removeChild(elem);
			}, 3000);
		};
	}
	handleNavbarSwitch() {
		this.state.navbarOpen ?
			this.setState({
				navbarOpen: false
			}) :
			this.setState({
				navbarOpen: true
			});
		!this.state.navbarOpen ? preventScroll.disable() : preventScroll.enable()
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