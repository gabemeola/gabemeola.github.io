import React, { Component, PropTypes } from "react";
import { connect } from 'react-redux';
import { NavbarContainer, MenuContainer } from "containers";
import { startConvo, newMessagesHook } from 'redux/modules/smooch'
import ImgPreRenders from "./imgPreRenders";
const socket = io.connect(SERVER_ADDRESS);

class Main extends Component {
	constructor(props) {
		super(props);
	}
	shouldComponentUpdate(nextProps, nextState) {
		if(nextProps.location.pathname !== this.props.location.pathname) { // If Route Changes, update
			return true
		} else {   // If Route Doesn't change then check to see if navbar state changed
			return nextProps.isNavOpen !== this.props.isNavOpen
		}
	}
	componentDidMount() {
		window.onload = () => { // Wait for CSS and externals to load
			setTimeout(() => {
				this.props.dispatch(startConvo()); // Start Smooch Convo

				let elem = document.getElementById("loading");
				elem.parentNode.removeChild(elem); // Remove Loading Indicator

				socket.on(this.props.smoochId, (data) => {
					this.props.dispatch(newMessagesHook());
				});
			}, 2000);
		};
	}
	render() {
		return(
			<div className="main-container">
				<NavbarContainer
				  route={this.props.location.pathname}
				/>
				<div className={"main-container-content " + (this.props.isNavOpen ? "main-container-content--blurred" : "")}>
					{this.props.children}
				</div>
				<MenuContainer/>
				<ImgPreRenders/>
			</div>
		)
	}
}

Main.propTypes = {
	isNavOpen: PropTypes.bool.isRequired
};

function mapStateToProps({menu, smooch}, props) {
	return {
		smoochId: smooch.smoochId,
		isNavOpen: menu.isNavOpen
	}
}

export default connect(
	mapStateToProps
)(Main);