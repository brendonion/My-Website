import React from 'react';
import { Route, Switch } from 'react-router';
import * as Routes from './constants/routes';

import App from './components/App';

const Routing = (props) => {
  return (
    <div>
      <Switch>
        <Route exact path={Routes.HOME} component={App} />
      </Switch>
    </div> 
  )
}

export default Routing
