import React, { Component } from "react";

import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.props.login(this.state);
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { username, password } = this.state;
    return (
      <div className="log-cnt-pos-total log-bg">
        <form className="cnt-pos flex-column log-form" onSubmit={this.handleFormSubmit}>
          <input
            type="text"
            name="username"
            value={username}
            placeholder="Your super unique username"
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Your secret password"
            value={password}
            onChange={this.handleChange}
          />
          <input className="btn btn-log" type="submit" value="Login"/>
        </form>
        <p className="color-white mt-2">
          You don't have an account?
          <Link className="secondary-color secondary-color-link" to={"/signup"}> Sign up</Link>
        </p>
      </div>
    );
  }
}

export default withAuth(Login);