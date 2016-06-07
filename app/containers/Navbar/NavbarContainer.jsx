import React, { PropTypes } from "react";
import NavbarHeader from "../../components/Navbar/NavbarHeader";
import NavbarNavBtn from "../../components/Navbar/NavbarNavBtn";

class NavbarContainer extends React.Component {
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