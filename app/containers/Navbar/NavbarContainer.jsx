import React from "react";
import NavbarHeader from "../../components/Navbar/NavbarHeader";
import NavbarNavBtn from "../../components/Navbar/NavbarNavBtn";

class Navbar extends React.Component {
	render() {
		return(
			<div className="navbar">
				<NavbarHeader/>
				<NavbarNavBtn/>
			</div>
		)
	}
}

export default Navbar;