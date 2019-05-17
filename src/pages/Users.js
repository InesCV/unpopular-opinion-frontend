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
        { isLoading ? 
            <Spinner type={spinnerTypes.SPIN} color={"black"} /> 
          : 
            (<div className="container nav-after d-flex flex-wrap">
              <div className="your-profile mb-2">
                <h2 className="profile-title pt-3 terciary-color">{user.username}'s Profile</h2>
                <div className="cnt-pos">
                  <div className="profile-user-card cnt-pos flex-column">
                    <img src={user.avatar} alt={user.username} className="card-author-img mr-2"/>
                    <h2 className="pt-3">{user.username}</h2>
                    { user.description && <p>{user.description}</p> }
                    <UserRate userId={this.props.location.state.id} />
                  </div>
                </div>
                <div className="cnt-pos mt-2">
                  <div className="profile-user-card cnt-pos flex-column">
                    <MatchRate userId={this.props.location.state.id} username={user.username}/>
                  </div>

                </div>
              </div>
              <div className="your-opinions">
                <h2 className="profile-title mt-2 terciary-color">{user.username} opinions</h2> 
                { opinions ? 
                  <div className="cnt-pos flex-column">
                    { opinions.map((opinion, index) => <UserUOPs key={index} op={opinion} />) }
                  </div>
                  : 
                    <p>{user.username} hasn't created any opinion</p>
                }
              </div>
            </div>)
        }
      </>
    );
  }
}

export default withAuth(User);
