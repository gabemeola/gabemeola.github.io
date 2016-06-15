import React from "react";
import NavbarContainer from "../../containers/Navbar/NavbarContainer";
import MenuContainer from "../../containers/Menu/MenuContainer";

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
		!this.state.navbarOpen ? this.fixed("disable") : this.fixed("enable")
	}
	handleNavbarClose() {
		if(this.state.navbarOpen) {
			this.handleNavbarSwitch();
		}
	}
	fixed(type) { //Prevent mobile devices scoll on fixed element
		const fixedElem = document.getElementById('app');
		const keys = {37: 1, 38: 1, 39: 1, 40: 1};
		function preventDefault(e) {
			e = e || window.event;
			if (e.preventDefault)
				e.preventDefault();
			e.returnValue = false;
		}
		function preventDefaultForScrollKeys(e) {
			if (keys[e.keyCode]) {
				preventDefault(e);
				return false;
			}
		}

		if(type == "disable") {
			fixedElem.addEventListener('touchmove', (e) => {
				e.preventDefault();
			}, false);
			fixedElem.addEventListener('DOMMouseScroll', preventDefault, false);
			fixedElem.onwheel = preventDefault; // modern standard
			fixedElem.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
			fixedElem.ontouchmove  = preventDefault; // mobile
			document.onkeydown  = preventDefaultForScrollKeys; //prevent scroll with keys
			console.log("disabled")
		} else {
			fixedElem.removeEventListener('touchmove', (e) => {
				e.preventDefault();
			}, false);
			fixedElem.removeEventListener('DOMMouseScroll', preventDefault, false);
			fixedElem.onmousewheel = document.onmousewheel = null;
			fixedElem.onwheel = null;
			fixedElem.ontouchmove = null;
			document.onkeydown = null;
			console.log("enabled")
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