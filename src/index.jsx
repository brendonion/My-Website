import React from 'react';
import  ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import { Route, Router } from 'react-router'
import createHistory from 'history/createBrowserHistory';
import * as Routes from './constants/routes.jsx';
import store from './store/store.jsx';

import Routing from './Routing.jsx';

import '../styles/index.scss';

const history = createHistory();

// Now you can dispatch navigation actions from anywhere!
// store.dispatch(push('/foo'))
ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<Routing />
		</Router>
	</Provider>,
	document.getElementById('root')
)
