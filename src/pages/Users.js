import React, { Component } from "react";

import { withAuth } from "../lib/AuthProvider";
import userService from "../lib/user-service";

import Navbar from "../components/Navbar";
import SpinnerCentral from "../components/SpinnerCentral";
import UserUOPs from "../components/UserUOPs";
import UserAffinity from "../components/UserAffinity";

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
            <SpinnerCentral /> 
          : 
            (<div className="container nav-after d-flex flex-wrap">
            {/* Profile card */}
              <div className="your-profile mb-2">
                <h2 className="profile-title pt-3 tertiary-color">{user.username}'s Profile</h2>
                <div className="cnt-pos">
                  <div className="profile-user-card cnt-pos flex-column">
                    <div className="profile-img mt-2" style={{ backgroundImage: `url(${user.avatar})`}}/>
                    {/* <img src={user.avatar} alt={user.username} className="card-author-img mr-2"/> */}
                    <h2 className="profile-name pt-3">{user.username}</h2>
                    { user.description && <p className="profile-description mb-2">{user.description}</p> }
                    <UserAffinity userId={this.props.location.state.id} path={this.props.match.path} user={user} />
                  </div>
                </div>
              </div>
            {/* Opinion cards */}              
              <div className="your-opinions">
                <h2 className="profile-title mt-2 tertiary-color">{user.username}'s opinions</h2> 
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
