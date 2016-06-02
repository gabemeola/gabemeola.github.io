import React from "react";
import { Router, hashHistory, Route, IndexRoute } from "react-router";
import Main from "../components/Main";

const routes = (
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
			<IndexRoute/>
		</Route>
	</Router>
);

export default routes;