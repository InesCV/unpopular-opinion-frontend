import React, { Component } from "react";

// import { withAuth } from "./lib/AuthProvider";

import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
        <div className="container">
          <h1>Unpopular Opinion</h1>
          <Navbar {...this.props}/>
        </div>
    );
  }
}

export default App;
