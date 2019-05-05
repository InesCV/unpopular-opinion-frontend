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
            <header className="d-flex flex-wrap container">
              <div className= "d-flex flex-column justify-content-center align-items-center pb-4">
                <h1 className="pt-5 pb-3">Unpopular Opinion</h1>
                <h4 className="des mb-3">It’s a Social Network to see how popular are your thoughts within a community</h4>
                <Link className="btn btn-white" to='/signup'>Signup</Link>
              </div>
              <div className="device-container">
                <div className="d-flex justify-content-center">
                    <img className="device" src="http://canyoupickthisup.com/cyptu/device-mockups/iphone_6_plus/iphone_6_plus_white_port.png" alt="device"></img>
                </div>
              </div>
            </header>
          </header>
          <div className="jumbotron bg-yellow mid-height d-flex justify-content-center center">
            <div className="container des">
              <h1 className="pb-2 color-primary">Swipe & Share</h1>
              <h3 className="pb-3">Discover what all the <span>buzz</span> is about!</h3>
              <p>Don't be afraid to ask the most random questions, the community will answer them for you</p>
            </div>
          </div>
          <div className="jumbotron mid-height d-flex justify-content-center center">
            <div className="container des">
              <h1 className="color-principal pb-2">Swipe & Share</h1>
              <h3 className="pb-3">Discover what all the buzz is about!</h3>
              <p>Don't be afraid to ask the most random questions, the community will answer them for you</p>
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
