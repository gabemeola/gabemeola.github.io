import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router';
import routes from "./config/routes.jsx";

ReactDOM.render(
	<Router>{routes}</Router>,
	document.getElementById("app")
);