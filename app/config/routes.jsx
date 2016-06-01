import React from "react";
import { Route, IndexRoute } from "react-router";

const routes = (
	<Route path="/" component={App}>
		<IndexRoute component={Navbar}/>
	</Route>
);

export default routes;