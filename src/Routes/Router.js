import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AuthProvider from "../lib/AuthProvider";
import PrivateRoute from "../components/PrivateRoute";
import AnonRoute from "../components/AnonRoute";
import Private from "../pages/Private";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Opinions from "../components/Opinions";
import CreateOpinion from "../pages/CreateOpinion";
import NotFound from '../pages/NotFound';

export default () => (
    <BrowserRouter>
      <Switch>
        <AnonRoute exact path="/signup" render={ props => <AuthProvider> <Signup {...props} /> </AuthProvider> } />
        <AnonRoute exact path="/login" render={ props => <AuthProvider> <Login {...props} /> </AuthProvider> } />
        <PrivateRoute exact path="/private" render={ props => <AuthProvider> <Private {...props} /> </AuthProvider> } /> 
        <Route exact path="/opinions" render={ props => <AuthProvider> <Opinions {...props} /> </AuthProvider> } />
        <Route exact path="/opinions/create" render={ props => <AuthProvider> <CreateOpinion {...props} /> </AuthProvider> } />
        <Route path="*" render={ props => <AuthProvider> <NotFound {...props} /> </AuthProvider> } />
      </Switch>
    </BrowserRouter>
    )