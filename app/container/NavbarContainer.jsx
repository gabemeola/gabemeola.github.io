import React from "react";
import NavbarHeader from "../components/NavbarHeader";
import NavbarNavBtn from "../components/NavbarNavBtn";
import NavbarSocials from "../components/NavbarSocials";

class Navbar extends React.Component {
	render() {
		return(
			<div className="navbar">
				<NavbarHeader/>
{/*				<NavbarSocials/>
				<NavbarNavBtn/>*/}
			</div>
		)
	}
}

export default Navbar;