import React from "react";
import { Router, hashHistory, Route, IndexRoute } from "react-router";
import Main from "../components/Main/Main";
import LandingContainer from "../containers/Landing/LandingContainer";
import HomeContainer from "../containers/Home/HomeContainer";
import MenuContainer from "../containers/Menu/MenuContainer";
import WorksContainer from "../containers/Works/WorksContainer";

const routes = (
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
			<IndexRoute component={LandingContainer}/>
			<Route path="about" component={HomeContainer}/>
			<Route path="menu" component={MenuContainer}/>
			<Route path="works/:work" component={WorksContainer}/>
			<Route path="*" component={LandingContainer}/>
		</Route>
	</Router>
);

export default routes;