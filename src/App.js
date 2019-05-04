import React, { Component } from "react";

import Navbar from "./components/Navbar";
import './sass/stylesheets/styles.scss'


class App extends Component {
  render() {
    return (
        <>
          <Navbar {...this.props}/>
          <div className="jumbotron">
            <div className="container">
              <h1>Unpopular Opinion</h1>
              <h3>Check out the ambience</h3>
              <p>Unpopular Opinion, it’s a Social Network to see how popular are your thoughts within a community</p>
            </div>
          </div>
        </>
    );
  }
}

export default App;
