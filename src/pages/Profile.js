import React, { Component } from "react";

import { withAuth } from "../lib/AuthProvider";
import userService from "../lib/user-service";

import SpinnerCentral from "../components/SpinnerCentral";
import Navbar from "../components/Navbar";
import UserEditProfile from "../components/UserEditProfile";
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
          <SpinnerCentral />
          : 
          <>
            { isEditing ?
              <UserEditProfile user={user} toggleIsEditing={this.toggleIsEditing} />
            :
              <UserHome user={user} toggleIsEditing={this.toggleIsEditing} logout={this.props.logout} history={this.props.history}/>}
          </> 
        }
      </>
    )
  }
}

export default withAuth(Profile);
