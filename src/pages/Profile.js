import React, { Component } from "react";

import { spinnerTypes } from "../constants/constants";
import { withAuth } from "../lib/AuthProvider";
import userService from "../lib/user-service";

import Spinner from "../components/Spinner";
import Navbar from "../components/Navbar";
import EditProfile from "../components/EditProfile";
import UserHome from "../components/UserHome";

class Profile extends Component {
  state = {
    isEditing: false,
    isLoading: true,
    user: {},
  }

  componentDidMount() {
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

  componentDidUpdate(prevProps, prevState) {
    if (prevState.isEditing !== this.state.isEditing){
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
  }

  toggleIsEditing = () => {
    this.setState({
      isEditing: !this.state.isEditing,
    });
  }

  render() {
    const { isLoading, isEditing, user } = this.state
    return (
      <>
        <Navbar {...this.props}/>
        { isLoading ? 
          <Spinner type={spinnerTypes.SPIN} color={"blue"} />
        : 
          <>
            { isEditing ?
              <EditProfile user={user} toggleIsEditing={this.toggleIsEditing} />
            :
              <UserHome user={user} toggleIsEditing={this.toggleIsEditing} logout={this.props.logout}/>}
        </> }
      </>
    )
  }
}

export default withAuth(Profile);
