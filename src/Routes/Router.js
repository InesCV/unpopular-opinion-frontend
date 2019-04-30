import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import routes from './routes';
import AuthProvider from "../lib/AuthProvider";

export default () => (
  <AuthProvider>
    <BrowserRouter>
      <Switch>
        {/* <Route exact path="/" component={ App } />
        <AnonRoute exact path="/signup" component= { Signup } />
        <AnonRoute exact path="/login" component= { Login } />
        <PrivateRoute exact path="/private" component= { Private } /> 
        <Route exact path="/opinions" component= { Opinions } />
        <Route exact path="/opinions/create" component= { CreateOpinion } />
        <Route path="*" component= { NotFound } /> */}

        {routes.map(({route: Route, path, component}, key) => 
            <Route exact path={path} component={component} key={key} />
        )}
      </Switch>
    </BrowserRouter>
  </AuthProvider>
)
