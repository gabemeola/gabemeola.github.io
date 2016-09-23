import React, { Component, PropTypes } from "react";
import { NavbarHeader, NavbarNavBtn } from 'components';
import { NotificationContainer } from 'containers';

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