import React, { PropTypes } from "react";
import NavbarHeader from "../../components/Navbar/NavbarHeader";
import NavbarNavBtn from "../../components/Navbar/NavbarNavBtn";

class NavbarContainer extends React.Component {
	passNavbarOpen() {
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
					<NavbarNavBtn
						onNavbarSwitch={() => this.passNavbarOpen()}
					  isNavbarOpen={this.props.handleNavbarOpen}
					/>
				</div>
			</div>
		)
	}
}

NavbarContainer.propTypes = {
	onNavbarSwitch: PropTypes.func.isRequired,
	handleNavbarOpen: PropTypes.bool.isRequired,
	onNavbarClose: PropTypes.func.isRequired
};

export default NavbarContainer;