import React from "react";
import { Route, IndexRoute } from "react-router";
import Navbar from "../components/Navbar";

const routes = (
	<Route path="/" component={Navbar}>
		<IndexRoute/>
	</Route>
);

export default routes;