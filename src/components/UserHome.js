import React from 'react';
import { Link } from 'react-router-dom';

import UserUOPs from "../components/UserUOPs";
import UserInfoCard from "../components/UserInfoCard";


const UserHome = ({ user, toggleIsEditing }) => {
  return (
    <div className="container nav-after d-flex flex-wrap">
      <div className="your-profile mb-2">
        <div className="d-flex justify-content-between profile-title mt-2 mb-2">
          <h2 className="terciary-color">Your profile</h2> 
          <p className="d-flex align-items-center" onClick={toggleIsEditing}>Edit profile</p>
        </div>
        <UserInfoCard user={user} />
      </div>
      <div className="your-opinions">
        <h2 className="profile-title mt-2 terciary-color">Your opinions</h2> 
        { user.opinions.length > 0 ? 
            <div className="cnt-pos flex-column">
              { user.opinions.map((opinion, index) => <UserUOPs key={index} op={opinion}/>) }
              <Link className="btn btn-primary" to='/opinions/create'>Create more opinions</Link>
            </div> 
          : 
            <div className="cnt-pos flex-column">
              <div className="profile-opinion-card mt-2 mb-5">
                <p className="mb-4">Create opinions of your own to get <span>answers</span> from the community</p>
                <Link className="btn btn-primary" to='/opinions/create'>Create Opinion</Link>
              </div>
            </div>
        }
      </div>
    </div>
  );
}

export default UserHome;