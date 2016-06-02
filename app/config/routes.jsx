import React from "react";
import { Router, hashHistory, Route, IndexRoute } from "react-router";
import Main from "../components/Main";
import Home from "../components/Home";
import MenuContainer from "../containers/MenuContainer";

const routes = (
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
			<IndexRoute component={Home}/>
			<Route path="menu" component={MenuContainer}/>
		</Route>
	</Router>
);

export default routes;