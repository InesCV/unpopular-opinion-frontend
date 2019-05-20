import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
class Signup extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    passwordAdvice: false,
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.props.signup(this.state);
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    if (name === "password") {
      this.setState({
        passwordAdvice: true,
      })
    }
  };

  render() {
    const { username, password, email, passwordAdvice } = this.state;
    return (
      <div className="log-cnt-pos-total log-bg">
        <form className="cnt-pos flex-column log-form" onSubmit={this.handleFormSubmit}>
          {/* <label>Username:</label> */}
          <input
            type="text"
            name="username"
            value={username}
            placeholder="Super unique username"
            onChange={this.handleChange}
          />
          {/* <label>Email:</label> */}
          <input
            type="text"
            name="email"
            value={email}
            placeholder="Email address"
            onChange={this.handleChange}
          />
          {/* <label>Password:</label> */}
          <input
            type="password"
            name="password"
            placeholder="Secret password"
            value={password}
            onChange={this.handleChange}
            />
          { passwordAdvice && <div className="log-comment"><p>&#9888; Please don't reuse your bank password,</p><p>we didn't spent a lot on security for this app.</p></div>}
          <input className="btn btn-log" type="submit" value="Signup" />
        </form>
        <div className="mt-2">
          <p className="color-white">Already have account?
          <Link className="secondary-color-link" to={"/login"}> Login</Link></p>
        </div>
      </div>
    );
  }
}

export default withAuth(Signup);
