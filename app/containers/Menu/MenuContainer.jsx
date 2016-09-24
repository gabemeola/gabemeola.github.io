import React, { Component, PropTypes } from "react";
import { connect } from 'react-redux';
import { navSwitcher } from 'redux/modules/menu';
import { MenuNav } from "components";

class MenuContainer extends Component {
	constructor(props) {
		super(props)
	}
	handleNavSwitch() {
		const { dispatch } = this.props;

		dispatch(navSwitcher())
	}
	render() {
		return (
			<div className={"menu-container " + (this.props.isNavOpen ? "menu-container--visible" : "menu-container--hidden")}>
				<MenuNav
					navSwitch={() => this.handleNavSwitch()}
				/>
			</div>
		)
	}
}

MenuContainer.defaultProps = {
	isNavOpen: false
};

MenuContainer.propTypes = {
	isNavOpen: PropTypes.bool.isRequired,
};

function mapStateToProps({menu}, props) {
	return {
		isNavOpen: menu.isNavOpen
	}
}

export default connect(
	mapStateToProps
)(MenuContainer);