import React, { PropTypes } from "react";
import NavbarHeader from "../../components/Navbar/NavbarHeader";
import NavbarNavBtn from "../../components/Navbar/NavbarNavBtn";

class NavbarContainer extends React.Component {
	passNavbarOpen() {
		this.props.onNavbarOpen();
	}
	render() {
		return(
			<div>
				<div className="navbar">
					<NavbarHeader/>
					<NavbarNavBtn
						onNavbarOpen={() => this.passNavbarOpen()}
					  isNavbarOpen={this.props.handleNavbarOpen}
					/>
				</div>
			</div>
		)
	}
}

NavbarContainer.propTypes = {
	onNavbarOpen: PropTypes.func.isRequired,
	handleNavbarOpen: PropTypes.bool.isRequired
};

export default NavbarContainer;