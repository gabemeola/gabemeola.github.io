import React, { Component, PropTypes } from "react";
import { MenuNav } from "components";

class MenuContainer extends Component {
	constructor(props) {
		super(props)
	}
	passNavbarSwitch() {
		this.props.onNavbarSwitch();
	}
	render() {
		return (
			<div className={"menu-container " + (this.props.visible ? "menu-container--visible" : "menu-container--hidden")}>
				<MenuNav
					onNavbarSwitch={() => this.passNavbarSwitch()}
				/>
			</div>
		)
	}
}

MenuContainer.defaultProps = {
	visible: false
};

MenuContainer.propTypes = {
	visible: PropTypes.bool.isRequired,
	onNavbarSwitch: PropTypes.func.isRequired
};


export default MenuContainer;