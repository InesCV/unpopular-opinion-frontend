import React, { Component } from "react";
import { Link } from 'react-router-dom';

import Navbar from "./components/Navbar";
import './sass/stylesheets/styles.scss'


class App extends Component {
  render() {
    return (
        <>
          <div className="jumbotron bg-micro full-height">
            <Navbar {...this.props}/>
            <div className="mt-5 pt-5 container cnt-pos flex-column">
              <h1 className="pt-5 pb-3">Unpopular Opinion</h1>
              <h4 className="mb-3">It’s a Social Network to see how popular are your thoughts within a community</h4>
              <Link className="btn btn-white" to='/signup'>Signup</Link>
            </div>
          </div>
        </>
    );
  }
}

export default App;
