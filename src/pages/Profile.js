import React, { Component } from "react";

import { spinnerTypes } from "../constants/constants";
import { withAuth } from "../lib/AuthProvider";
import userService from "../lib/user-service";

import Spinner from "../components/Spinner";
import Navbar from "../components/Navbar";
import UserHome from "../components/UserHome";

class Profile extends Component {
  state = {
    isLoading: true,
    user: {},
  }

  componentDidMount() {
    userService.profile()
      .then(({user}) => {
        this.setState({
          isLoading: false,
          user,
        });
      })
      .catch((error)=> {
        console.log("Couldn't get the user information from API.");
        console.log(error);
      });
  }

  componentDidUpdate() {
      userService.profile()
        .then(({user}) => {
          this.setState({
            isLoading: false,
            user,
          })
        })
        .catch((error)=> {
          console.log("Couldn't get the user information from API.");
          console.log(error);
        });
  }

  render() {
    const { isLoading, isEditing, user } = this.state
    return (
      <>
        <Navbar {...this.props}/>
        { isLoading ? 
          <Spinner className="cnt-pos" type={spinnerTypes.SPIN} color={"blue"} />
          : 
          <UserHome user={user} logout={this.props.logout}/>
        }
      </>
    )
  }
}

export default withAuth(Profile);
