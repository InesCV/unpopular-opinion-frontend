import React, { Component } from "react";

import { withAuth } from "../lib/AuthProvider";
// import opinionService from "../lib/opinion-service";
import Navbar from "../components/Navbar";
import Spinner from "../components/Spinner";
import {types} from "../lib/spiner-types";
// import UserUOPs from "../components/UserUOPs";

class Profile extends Component {
  state = {
    isLoading: false,
    opinions: []
  }

  // componentDidMount() {
  //   opinionService.user()
  //     .then((ops) => {
  //       this.setState({
  //         isLoading: false,
  //         opinions: [...ops],
  //       }) 
  //     })
  //     .catch((error)=> {
  //       console.log("Couldn't get the opinions");
  //       console.log(error);
  //     });
  // }

  render() {
    const { user, logout } = this.props;
    const { isLoading, opinions } = this.state;
    console.log(this.props)

    return (
      <>
        <Navbar {...this.props}/>
        { isLoading ? 
        (<>
          <Spinner type={types.Spin} color={"black"} />
        </>) : 
        (<div className="container">
          <h2 className="pt-3">Hey {user.username}</h2>
          { user.description ? (<p>Your description {user.description}</p>) : (<p>You should upload a description</p>)}
          {/* { opinions ? 
          (<>
            {
              opinions.map((opinion, index) => 
                <UserUOPs key={index} index={index} op={opinion} respond={this.onRespond} />
              )
            }
          </>) : (<p>You should upload a description</p>)} */}
          <div className="d-flex justify-content-center pt-2 pb-3"><button className="btn btn-primary" onClick={logout}>Logout</button></div>
        </div>)
        }
      </>
    );
  }
}

export default withAuth(Profile);
