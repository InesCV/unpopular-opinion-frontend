import React, { Component } from "react";

import '../sass/stylesheets/styles.scss'

class Congrats extends Component {
  render() {
    return (            
        <div className="jumbotron bg-about full-height d-flex justify-content-center center">
          <div className="container index-1">
            <h1 className="pt-5 pb-3">Thank you so much to my partner.</h1>
            <h3>It was a real pleasure working with you.</h3>
            <p>That's all folks, be happy and vote for us!</p>
            <p><span className="tertiary-color bold">UOP #UnpopularOpinion</span></p>
          </div>
          <div className="overlay">
          </div>
        </div>
    );
  }
}

export default Congrats;
