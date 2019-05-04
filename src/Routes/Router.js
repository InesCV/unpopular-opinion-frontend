import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import routes from './routes';
import AuthProvider from "../lib/AuthProvider";

export default () => (
  <BrowserRouter>
    <AuthProvider>
      <Switch>
        {routes.map(({route: Route, path, component}, key) => 
            <Route exact whereAmI={path} path={path} component={component} key={key} />
        )}
      </Switch>
    </AuthProvider>
  </BrowserRouter>
)
