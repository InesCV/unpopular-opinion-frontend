import React, { Component } from "react";

// import { withAuth } from "./lib/AuthProvider";

import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    console.log(this.props);
    return (
        <div className="container">
          <h1>Unpopular Opinion</h1>
          {/* <Navbar /> */}
        </div>
    );
  }
}

export default App;
