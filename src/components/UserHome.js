import React from 'react';
import { Link } from 'react-router-dom';

import UserUOPs from "../components/UserUOPs";
import UserRate from "../components/UserRate";

const UserHome = ({ user, toggleIsEditing, logout }) => {
  return (
    <div className="container">
      <img src={user.avatar} alt={user.username}/>
      <h2 className="pt-3">Hey {user.username}</h2>
      { user.description ? <p>{user.description}</p> : <p>You should upload a description</p>}
      <UserRate userId={user._id} />
      { user.opinions.length > 0 ? 
          <>
            { user.opinions.map((opinion, index) => <UserUOPs key={index} op={opinion}/>) }
            <Link className="btn btn-primary" to='/opinions/create'>Create more opinions</Link>
          </> 
        : 
          <>
            <p className="mb-2">You have not created a single opinion</p>
            <Link className="btn btn-primary" to='/opinions/create'>Create Opinion</Link>
          </>
      }
      <div className="d-flex justify-content-center pt-2 pb-3"><button className="btn btn-primary" onClick={toggleIsEditing}>Edit Profile</button></div>
      <div className="d-flex justify-content-center pt-2 pb-3"><button className="btn btn-primary" onClick={logout}>Logout</button></div>
    </div>
  );
}

export default UserHome;