import React, { Component, PropTypes } from "react";
import NavbarHeader from "../../components/Navbar/NavbarHeader";
import NavbarNavBtn from "../../components/Navbar/NavbarNavBtn";
import NotificationContainer from "../Notification/NotificationContainer";

class NavbarContainer extends Component {
	constructor(props) {
		super(props);
	}
	passNavbarSwitch() {
		this.props.onNavbarSwitch();
	}
	passNavbarClose() {
		this.props.onNavbarClose();
	}
	render() {
		return(
			<div className="navbar">
				<NavbarHeader
					onNavbarClose={() => this.passNavbarClose()}
				/>
				<NotificationContainer
				  route={this.props.route}
				/>
				<NavbarNavBtn
					onNavbarSwitch={() => this.passNavbarSwitch()}
				  isNavbarOpen={this.props.isNavbarOpen}
				/>
			</div>
		)
	}
}

NavbarContainer.propTypes = {
	onNavbarSwitch: PropTypes.func.isRequired,
	isNavbarOpen: PropTypes.bool.isRequired,
	onNavbarClose: PropTypes.func.isRequired
};

export default NavbarContainer;