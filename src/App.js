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
            <div className="container">
              <h1 className="pt-5 pb-3">Unpopular Opinion</h1>
              <h4 className="mb-3">It’s a Social Network to see how popular are your thoughts within a community</h4>
              <Link className="btn btn-white" to='/signup'>Signup</Link>
            </div>
          </div>
          <div className="jumbotron mid-height">
            <div className="container">
              <h1 className="pt-5 pb-3">Swipe & Share</h1>
              <h4>Don't be afraid to ask the most random questions, the community will answer them for you</h4>
            </div>
          </div>
          <div className="jumbotron bg-about mid-height">
            <div className="container">
              <h1 className="pt-5 pb-3">About us</h1>
              <h4>It’s a Social Network to see how popular are your thoughts within a community</h4>
            </div>
          </div>
        </>
    );
  }
}

export default App;
