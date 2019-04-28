import React, { Component } from "react";

import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
        <div className="container">
          <h1>Unpopular Opinion</h1>
          <Navbar />
          {/* <Switch>
            <AnonRoute path="/signup" component={Signup} />
            <AnonRoute path="/login" component={Login} />
            <PrivateRoute path="/private" component={Private} /> 
            <Route exact path="/opinions" component={Opinions} />
            <Route exact path="/opinions/create" component={CreateOpinion} />
          </Switch> */}
        </div>
    );
  }
}

export default App;
