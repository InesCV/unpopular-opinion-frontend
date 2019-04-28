import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NotFound from '../pages/NotFound'

export default () => {
  <BrowserRouter>
    <Switch>
      <AnonRoute exact path="/signup" component={Signup} />
      <AnonRoute exact path="/login" component={Login} />
      <PrivateRoute exact path="/private" component={Private} /> 
      <Route exact path="/opinions" component={Opinions} />
      <Route exact path="/opinions/create" component={CreateOpinion} />
      <Route path="*" component={NotFound} />
    </Switch>
  </BrowserRouter>
}
