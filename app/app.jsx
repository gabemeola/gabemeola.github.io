import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import * as reducers from 'redux/modules';
import routes from './config/routes';

const store = createStore(combineReducers(reducers), compose(
	applyMiddleware(thunk), // Redux Thunks that lets us return function asynchronously
	window.devToolsExtension ? window.devToolsExtension() : (f) => f // Lets us view Redux store using Redux Chrome Extension
));

ReactDOM.render(
	<Provider store={store}>
		{routes}
	</Provider>,
	document.getElementById("app")
);