import React from "react";
import { Router, hashHistory, Route, IndexRoute } from "react-router";
import Main from "../components/Main/Main";
import LandingContainer from "../containers/Landing/LandingContainer";
import HomeContainer from "../containers/Home/HomeContainer";
import MenuContainer from "../containers/Menu/MenuContainer";

const routes = (
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
			<IndexRoute component={LandingContainer}/>
			<Route path="home" component={HomeContainer}/>
			<Route path="menu" component={MenuContainer}/>
		</Route>
	</Router>
);

export default routes;