import React, { Component, PropTypes } from "react";
import { connect } from 'react-redux';
import { openNav, closeNav } from 'redux/modules/menus';
import { NavbarHeader, NavbarNavBtn } from 'components';
import { NotificationContainer } from 'containers';

class NavbarContainer extends Component {
	constructor(props) {
		super(props);
	}
	handleNavSwitch() {
		const { dispatch, isNavOpen } = this.props;

		isNavOpen ? dispatch(closeNav()) : dispatch(openNav()); // Simple Nav Open / Close Switch
	}
	handleNavClose() {
		const { dispatch } = this.props;

		if(this.props.isNavOpen) {
			dispatch(closeNav())
		}
	}
	render() {
		return(
			<div className="navbar">
				<NavbarHeader
					navClose={() => this.handleNavClose()}
				/>
				<NotificationContainer
				  route={this.props.route}
				/>
				<NavbarNavBtn
					navSwitch={() => this.handleNavSwitch()}
				  isNavOpen={this.props.isNavOpen}
				/>
			</div>
		)
	}
}

NavbarContainer.propTypes = {
	isNavOpen: PropTypes.bool.isRequired
};

function mapStateToProps({menus}, props) {
	return {
		isNavOpen: menus.isNavOpen
	}
}

export default connect(
	mapStateToProps
)(NavbarContainer);