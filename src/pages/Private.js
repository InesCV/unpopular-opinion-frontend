import React, { Component } from "react";

import { withAuth } from "../lib/AuthProvider";
import Navbar from "../components/Navbar";

class Private extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <h1>Hola {this.props.user.username}</h1>
      </div>
    );
  }
}

export default withAuth(Private);
