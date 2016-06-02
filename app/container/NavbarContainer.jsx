import React from "react";
import NavbarHeader from "../components/NavbarHeader";
import NavbarNavBtn from "../components/NavbarNavBtn";

class Navbar extends React.Component {
	render() {
		return(
			<div className="navbar">
				<NavbarHeader/>
				{/*<NavbarNavBtn/>*/}
			</div>
		)
	}
}

export default Navbar;