import React, { Component } from "react";
import { toast } from 'react-toastify';

import auth from "./auth-service";
import {spinnerTypes, errorTypes} from "../constants/constants";

import Spinner from "../components/Spinner";

const { Consumer, Provider } = React.createContext();

export { Consumer };

export const withAuth = Comp => {
  return class WithAuth extends Component {
    render() {
      return (
        <Consumer>
          {authStore => {
            return (
              <Comp
                login={authStore.login}
                signup={authStore.signup}
                user={authStore.user}
                logout={authStore.logout}
                isLoggedin={authStore.isLoggedin}
                {...this.props}
              />
            );
          }}
        </Consumer>
      );
    }
  };
};

class AuthProvider extends Component {
  state = {
    isLoggedin: false,
    user: null,
    isLoading: true
  };

  componentDidMount() {
    auth
      .me()
      .then(user => {
        this.setState({
          isLoggedin: true,
          user,
          isLoading: false
        });
      })
      .catch(() => {
        this.setState({
          isLoggedin: false,
          user: null,
          isLoading: false
        });
        toast.error(`Sorry. ${errorTypes.E404U}`, {
          position: toast.POSITION.BOTTOM_RIGHT
        });
      });
  }

  signup = user => {
    const { username, password } = user;
    auth
      .signup({ username, password })
      .then(user => {
        toast.success("User created succesfully!", {
          position: toast.POSITION.BOTTOM_RIGHT
        });
        this.setState({
          isLoggedin: true,
          user
        });
        toast.info(`Wellcome ${user.username}`, {
          position: toast.POSITION.BOTTOM_RIGHT
        });
      })
      .catch(({ response: { data: error } }) => {
        this.setState({
          message: error.statusMessage
        });
        toast.error(`Sorry. ${errorTypes.E422}`, {
          position: toast.POSITION.BOTTOM_RIGHT
        });
      });
  };

  login = user => {
    const { username, password } = user;
    auth
      .login({ username, password })
      .then(user => {
        toast.success("Succesfully logged!", {
          position: toast.POSITION.BOTTOM_RIGHT
        });
        this.setState({
          isLoggedin: true,
          user
        });
        toast.info(`Wellcome ${user.username}`, {
          position: toast.POSITION.BOTTOM_RIGHT
        });
      })
      .catch(() => {
        toast.error(`Sorry. ${errorTypes.E404U}`, {
          position: toast.POSITION.BOTTOM_RIGHT
        });
      });
  };

  logout = () => {
    auth
      .logout()
      .then(() => {
        toast.info(`Hope see yo soon ${this.state.user.username}`, {
          position: toast.POSITION.BOTTOM_RIGHT
        });
        this.setState({
          isLoggedin: false,
          user: null
        });
        toast.success("Succesfully logged out.", {
          position: toast.POSITION.BOTTOM_RIGHT
        });
      })
      .catch(() => {
        toast.error(`Sorry. ${errorTypes.E500}`, {
          position: toast.POSITION.BOTTOM_RIGHT
        });
      });
  };x
  render() {
    const { isLoading, isLoggedin, user } = this.state;
    return isLoading ? (
      <Spinner type={spinnerTypes.SPIN} color={"black"} />
    ) : (
      <Provider
        value={{
          isLoggedin,
          user,
          login: this.login,
          logout: this.logout,
          signup: this.signup
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export default AuthProvider;
