import React from 'react';
import { Route, Switch } from 'react-router';
import * as Routes from './constants/routes.jsx';

import Login from './components/Login.jsx';
import App from './components/App.jsx';

const Routing = (props) => {
  return (
    <div>
      <Switch>
        <Route exact path={Routes.HOME} component={App} />
				<Route path={Routes.LOGIN} component={Login} />
      </Switch>
    </div> 
  )
}

export default Routing
