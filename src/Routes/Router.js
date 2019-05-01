import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import routes from './routes';
import AuthProvider from "../lib/AuthProvider";

export default () => (
  <AuthProvider>
    <BrowserRouter>
      <Switch>
        {routes.map(({route: Route, path, component}, key) => 
            <Route exact path={path} component={component} key={key} />
        )}
      </Switch>
    </BrowserRouter>
  </AuthProvider>
)
