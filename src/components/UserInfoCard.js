import React from 'react';
import { Link } from 'react-router-dom';

import UserRate from "./UserRate";

const UserInfoCard = ({ user }) => {
  return (
    <div className="cnt-pos">
      <div className="profile-user-card cnt-pos flex-column">
        <div className="profile-img" style={{ backgroundImage: `url(${user.avatar})`}}/>
        <h2 className="profile-name pt-3">{user.username}</h2>
        { user.description ? <p className="profile-description mb-2">{user.description}</p> : <p>You should <Link to='/profile/edit'>upload</Link> a description</p>}
        <UserRate userId={user._id} />
      </div>
    </div>
  );
}

export default UserInfoCard;