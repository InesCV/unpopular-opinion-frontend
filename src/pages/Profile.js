import React, { Component } from "react";

import { withAuth } from "../lib/AuthProvider";
import opinionService from "../lib/opinion-service";
import Navbar from "../components/Navbar"
import Spinner from "../components/Spinner";
import {types} from "../lib/spiner-types";


class Profile extends Component {
  state = {
    isLoading: true,
    opinions: []
  }

  componentDidMount() {
    opinionService.user()
      .then((ops) => {
        console.log(ops)
        this.setState({
          isLoading: false,
          opinions: [...ops],
        }) 
      })
      .catch((error)=> {
        console.log("Couldn't get the opinions");
        console.log(error);
      });
  }

  render() {
    const { user, logout } = this.props;
    const { isLoading, opinions } = this.state;

    return (
      <>
        <Navbar {...this.props}/>
        { isLoading ? 
        (<>
          <Spinner type={types.Spin} color={"blue"} />
        </>) : 
        (<div className="container">
          <h2 className="pt-3">Hey {user.username}</h2>
          { user.description ? (
            <div>
              <p>Your description {user.description}</p>
              <p>Those are your statistics</p>
            </div>
          ) : (
            <div>
              <p>You should upload a description</p>
              <p>Those are your stadistics</p>
            </div>
          )}
          <button className="btn btn-primary mt-2" onClick={logout}>Logout</button>
        </div>)
        }
      </>
    );
  }
}

export default withAuth(Profile);
