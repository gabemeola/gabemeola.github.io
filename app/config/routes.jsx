import React from "react";
import { Router, hashHistory, Route, IndexRoute } from "react-router";
import { Main } from 'components';
import {
	LandingContainer,
	HomeContainer,
	MenuContainer,
	WorksContainer,
	SmoochContainer
} from 'containers';

const routes = (
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
			<IndexRoute component={LandingContainer}/>
			<Route path="smooch" component={SmoochContainer}/>
			<Route path="about" component={HomeContainer}/>
			<Route path="menu" component={MenuContainer}/>
			<Route path="works/:work" component={WorksContainer}/>
			<Route path="*" component={LandingContainer}/>
		</Route>
	</Router>
);

export default routes;