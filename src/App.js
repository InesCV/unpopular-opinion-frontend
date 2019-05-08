import React, { Component } from "react";
import { Link } from 'react-router-dom';

import Navbar from "./components/Navbar";
import './sass/stylesheets/styles.scss'


class App extends Component {
  render() {
    return (
        <>
          <header className="jumbotron bg-micro">
            <Navbar {...this.props}/>
            <header className="d-flex flex-wrap">
              <div className= "d-flex flex-column justify-content-center align-items-center pb-4 flex-grow-1 container">
                <h1 className="des pt-5 pb-3">Unpopular Opinion</h1>
                <h4 className="des mb-3">It’s a Social Network to see how popular are your thoughts within a community</h4>
                <Link className="btn btn-white" to='/signup'>Signup</Link>
              </div>
            </header>
          </header>
        </>
    );
  }
}

export default App;
