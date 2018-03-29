import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router } from 'react-router';
import createHistory from 'history/createBrowserHistory';
import * as Routes from './constants/routes';

import Routing from './Routing';

import '../styles/index.scss';

const history = createHistory();

ReactDOM.render(
	<Router history={history}>
		<Routing />
	</Router>,
	document.getElementById('root')
)
