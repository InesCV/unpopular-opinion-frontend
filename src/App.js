import React, { Component } from "react";
import { Link } from 'react-router-dom';

import MockupPhone from './mockups/MockupPhone.png';
import Logo from './mockups/UOPlogo.png'; 
import Navbar from "./components/Navbar";
import './sass/stylesheets/styles.scss'

class App extends Component {
  render() {
    return (
        <>
          <header className="jumbotron bg-micro">
            <Navbar {...this.props}/>
            <div className="cnt-pos">
              <div className="d-flex flex-wrap nav-after">
                <div className= "d-flex flex-column align-items-center pb-4 flex-grow-1 container">
                  <div className="des pt-5 home-logo"><img src={Logo} alt="Logo" /></div>
                  <h2 className="des pb-3">#UnpopularOpinion</h2>
                  <h4 className="des mb-3">It’s a Social Network to see how popular are your thoughts within a community</h4>
                  <Link className="btn btn-tertiary-reverse" to='/signup'>Sign up</Link>
                </div>
                <div className="device-container flex-grow-1 padding">
                  <div className="d-flex justify-content-center">
                      <img className="device" src={MockupPhone} alt="MockupPhone" />
                  </div>
                </div>
              </div>
            </div>
          </header>
          <div className="jumbotron bg-mockup mockup full-height">
            <div className="des-mockup">
              <h1 className="pb-2 tertiary-color">Swipe & Share</h1>
              <h3 className="pb-3">Discover what all the <span>buzz</span> is about!</h3>
              <p>Don't be afraid to ask the most random questions, the community will answer them for you</p>
            </div>
          </div>
          {/* <div className="jumbotron bg-swipe mid-height d-flex justify-content-center center">
            <div className="container des">
              <h1 className="color-principal pb-2">¡¡Aquí va la Demo!!</h1>
              <p>Here you can find a small taste of how the platform works</p>
            </div>
          </div> */}
          <div className="jumbotron bg-about full-height d-flex justify-content-center center">
            <div className="container des index-1">
              <h1 className="pt-5 pb-3">About us</h1>
              <p>We are just trying to get some answers. If we have to create an platform to do so... <span className="tertiary-color bold">UOP #UnpopularOpinion</span> it is.</p>
            </div>
            <div className="overlay">
            </div>
          </div>
        </>
    );
  }
}

export default App;
