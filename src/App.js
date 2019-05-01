import React, { Component } from "react";

import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
        <div className="container">
          <Navbar {...this.props}/>
          <h1>Unpopular Opinion</h1>
        </div>
    );
  }
}

export default App;
