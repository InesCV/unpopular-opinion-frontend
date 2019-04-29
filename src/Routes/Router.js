import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AuthProvider from "../lib/AuthProvider";
import PrivateRoute from "../components/PrivateRoute";
import AnonRoute from "../components/AnonRoute";
import App from "../App";
import Private from "../pages/Private";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Opinions from "../components/Opinions";
import CreateOpinion from "../pages/CreateOpinion";
import NotFound from '../pages/NotFound';

export default () => (
  <AuthProvider>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ App } />
        <AnonRoute exact path="/signup" component= { Signup } />
        <AnonRoute exact path="/login" component= { Login } />
        <PrivateRoute exact path="/private" component= { Private } /> 
        <Route exact path="/opinions" component= { Opinions } />
        <Route exact path="/opinions/create" component= { CreateOpinion } />
        <Route path="*" component= { NotFound } />
      </Switch>
    </BrowserRouter>
  </AuthProvider>
)
