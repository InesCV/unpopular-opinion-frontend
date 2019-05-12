import React, { Component } from "react";

import {spinnerTypes} from "../constants/constants";

import { withAuth } from "../lib/AuthProvider";
import userService from "../lib/user-service";

import Navbar from "../components/Navbar";
import Spinner from "../components/Spinner";
import UserUOPs from "../components/UserUOPs";
import UserRate from "../components/UserRate";
import MatchRate from "../components/MatchRate";

class User extends Component {
  state = {
    isLoading: true,
    user: {}
  }

  componentDidMount() {
    userService.user(this.props.location.state.id)
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
    const { isLoading, user } = this.state;
    const { opinions } = user;    

    return (
      <>
        <Navbar {...this.props}/>
        { isLoading ? <Spinner type={spinnerTypes.SPIN} color={"black"} /> : 
        (<div className="container">
          <h2 className="pt-3">{user.username}'s Profile</h2>
          <p> {user.description}</p>
          <UserRate user={this.props.location.state.id} />
          <MatchRate userId={this.props.location.state.id} username={user.username}/>
          { opinions ? 
          (<>
            {
              opinions.map((opinion, index) => 
                <UserUOPs key={index} index={index} op={opinion} user={user} respond={this.onRespond} />
              )
            }
          </>) : (<p>{user.username} hasn't created any opinion</p>)}
        </div>)
        }
      </>
    );
  }
}

export default withAuth(User);
