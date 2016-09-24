import React, { Component, PropTypes } from "react";
import { connect } from 'react-redux';
import { closeNav, navSwitcher } from 'redux/modules/menu';
import { NavbarHeader, NavbarNavBtn } from 'components';
import { ChatContainer } from 'containers';

class NavbarContainer extends Component {
	constructor(props) {
		super(props);
	}
	handleNavSwitch() {
		const { dispatch } = this.props;

		dispatch(navSwitcher());
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
				<ChatContainer
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

function mapStateToProps({menu}, props) {
	return {
		isNavOpen: menu.isNavOpen
	}
}

export default connect(
	mapStateToProps
)(NavbarContainer);