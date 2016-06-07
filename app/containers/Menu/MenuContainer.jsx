import React from "react";
import MenuNav from "../../components/Menu/MenuNav";

class MenuContainer extends React.Component {
	render() {
		return (
			<div className={"menu-container " + (this.props.visible ? "menu-container--visible" : "menu-container--hidden")}>
				<MenuNav/>
			</div>
		)
	}
}

MenuContainer.defaultProps = {
	visible: false
};

export default MenuContainer;