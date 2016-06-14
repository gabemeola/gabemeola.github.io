import React from 'react';
import ReactDOM from 'react-dom';
import routes from "./config/routes";

window.onload = () => { // Wait for CSS to load and externals
	ReactDOM.render(
		routes,
		document.getElementById("app")
	);
};