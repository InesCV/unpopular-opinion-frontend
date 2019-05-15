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
      <>
        <UserAvatarUpload type={'profile'} name={username} actualImg={avatar} updateFunction={this.setAvatar} />
        <br />
        <form className="container pt-3" onSubmit={this.handleFormSubmit}>
          <label>Username: </label>
          <input className="form-control"
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange}
          />
          <br />
          <label>Description: </label>
          <textarea className="form-control"
            type="text"
            name="description"
            value={description}
            onChange={this.handleChange}
          /><br />
          <input className="btn btn-primary" type="submit" value="Save" />
        </form>
        <button className="btn btn-primary" onClick={this.handleCancel}>Cancel</button>
      </>
    )
  }
}