import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { withAuth } from "../lib/AuthProvider";

import { toast } from 'react-toastify';

import {spinnerTypes, errorTypes} from "../constants/constants";
import userService from '../lib/user-service';

import UserAvatarUpload from '../components/UserAvatarUpload';
import Navbar from "../components/Navbar";
import Spinner from "../components/Spinner";


class EditProfile extends Component {
  state = {
    avatar: this.props.user.avatar || "",
    username: this.props.user.username || "",
    description: this.props.user.description || "",
    oldAvatar: this.props.user.avatar || "",
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
  
  handleFormSubmit = e => {
    e.preventDefault();
    const {avatar, username, description} = this.state
    userService.update({avatar, username, description})
      .then(({user}) => {
        this.props.history.push(`/profile`)
      })
      .catch((error) => {
        toast.error(`Sorry. ${errorTypes.E405U}`, {
          position: toast.POSITION.BOTTOM_RIGHT
        });
      })
  };
  
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    console.log(this.props)
  };

  setAvatar = (url) => {
    this.setState({
      avatar: url,
    })
  }

  handleCancel = () => {
    this.setState({
      avatar: this.state.oldAvatar,
    })
  }
  
  render (){
    // const { username, avatar, description } = this.state;
    const { username, avatar, description } = this.state.user;

    return (
      <>
        <Navbar {...this.props}/>
        <div className="nav-after">
          { this.state.isLoading ? 
            <Spinner type={spinnerTypes.SPIN} color={"blue"}/>
           : 
           <>
            <div className="profile-edit mt-4">
              <UserAvatarUpload type={'profile'} name={username} actualImg={avatar} updateFunction={this.setAvatar} />
              <div className="profile-edit-user mt-4">
                <form className="d-flex flex-column profile-edit-form" onSubmit={this.handleFormSubmit}>
                  <label>Username:</label>
                  <input className="profile-edit-box profile-edit-username"
                    type="text"
                    name="username"
                    value={username}
                    onChange={this.handleChange}
                    />
                  <label className="mt-2">Description:</label>
                  <textarea className="profile-edit-box profile-edit-description"
                    type="text"
                    name="description"
                    value={description}
                    onChange={this.handleChange}
                  />
                </form>
              </div>
            </div>
            <div className="d-flex justify-content-center mt-4">
              <input className="btn btn-secundary mr-2" type="submit" value="Save" onClick={this.handleFormSubmit}/>
              <Link to="/profile" className="btn btn-red ml-2">Cancel</Link>
            </div>
           </>
          }
        </div>
      </>
    )
  }
}

export default withAuth(EditProfile);