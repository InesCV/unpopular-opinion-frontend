import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Opinions from "./components/Opinions";
import CreateOpinion from "./pages/CreateOpinion";
import Private from "./pages/Private";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

import PrivateRoute from "./components/PrivateRoute";
import AnonRoute from "./components/AnonRoute";
import AuthProvider from "./lib/AuthProvider";

class App extends Component {
  render() {
    return (
      <AuthProvider>
        <div className="container">
          <h1>Basic React Authentication</h1>
          <Navbar />
          <Switch>
            <AnonRoute path="/signup" component={Signup} />
            <AnonRoute path="/login" component={Login} />
            <PrivateRoute path="/private" component={Private} /> 
            <Route exact path="/opinions" component={Opinions} />
            <Route exact path="/opinions/create" component={CreateOpinion} />
          </Switch>
        </div>
      </AuthProvider>
    );
  }
}

export default App;
