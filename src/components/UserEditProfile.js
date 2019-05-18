import React, { Component } from 'react';
import { toast } from 'react-toastify';

import {errorTypes} from "../constants/constants";
import userService from '../lib/user-service';

import UserAvatarUpload from './UserAvatarUpload';

export default class EditProfile extends Component {
  
  state = {
    avatar: this.props.user.avatar || "",
    username: this.props.user.username || "",
    description: this.props.user.description || "",
    oldAvatar: this.props.user.avatar || "",
  }
  
  handleFormSubmit = e => {
    e.preventDefault();
    const {avatar, username, description} = this.state
    userService.update({avatar, username, description})
      .then(({user}) => {
        this.props.toggleIsEditing();
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
    this.props.toggleIsEditing();
  }
  
  render (){
    const { username, avatar, description } = this.state;
    return (
      <div className="nav-after">
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
          <button className="btn btn-red ml-2" onClick={this.handleCancel}>Cancel</button>
        </div>
        </div>
    )
  }
}