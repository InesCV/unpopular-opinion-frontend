import React, { Component } from "react";

import { Link } from 'react-router-dom';
import { withAuth } from "../lib/AuthProvider";
import {types} from "../lib/spiner-types";
import Navbar from "../components/Navbar";
import Spinner from "../components/Spinner";
import UserUOPs from "../components/UserUOPs";
import userService from "../lib/user-service";
import UserRate from "../components/UserRate";

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
        }) 
      })
      .catch((error)=> {
        console.log("Couldn't get the user information from API.");
        console.log(error);
      });
  }


  render() {
    const { logout } = this.props;
    const { isLoading, user } = this.state;

    return (
      <>
        <Navbar {...this.props}/>
        { isLoading ? 
        (<>
          <Spinner type={types.Spin} color={"blue"} />
        </>) : 
        (<div className="container">
          <h2 className="pt-3">Hey {user.username}</h2>
          { user.description ? (<p>Your description {user.description}</p>) : (<p>You should upload a description</p>)}
          <UserRate user={user._id} />
          { user.opinions ? 
          (<>
            { 
              user.opinions.map((opinion, index) => 
                <UserUOPs key={index} index={index} op={opinion} respond={this.onRespond} />
              )
            }
            <Link className="btn btn-primary" to='/opinions/create'>Create more opinions</Link>

          </>) : (
            <>
              <p className="mb-2">You have not created a single opinion</p>
              <Link className="btn btn-primary" to='/opinions/create'>Create Opinion</Link>
            </>
          )}
          <div className="d-flex justify-content-center pt-2 pb-3"><button className="btn btn-primary" onClick={logout}>Logout</button></div>
        </div>)
        }
      </>
    );
  }
}

export default withAuth(Profile);
