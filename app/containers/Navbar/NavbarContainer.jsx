import React, { PropTypes } from "react";
import NavbarHeader from "../../components/Navbar/NavbarHeader";
import NavbarNavBtn from "../../components/Navbar/NavbarNavBtn";
import NotificationIcon from "../../components/Notification/NotificationIcon";

class NavbarContainer extends React.Component {
	constructor(props) {
		super(props)
	}
	passNavbarSwitch() {
		this.props.onNavbarSwitch();
	}
	passNavbarClose() {
		this.props.onNavbarClose();
	}
	render() {
		return(
			<div>
				<div className="navbar">
					<NavbarHeader
						onNavbarClose={() => this.passNavbarClose()}
					/>
					<NotificationIcon/>
					<NavbarNavBtn
						onNavbarSwitch={() => this.passNavbarSwitch()}
					  isNavbarOpen={this.props.isNavbarOpen}
					/>
				</div>
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