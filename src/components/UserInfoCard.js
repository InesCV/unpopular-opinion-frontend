import React from 'react';

import UserRate from "./UserRate";

const UserInfoCard = ({ user }) => {
  return (
    <div className="cnt-pos">
      <div className="profile-user-card cnt-pos flex-column">
        <img src={user.avatar} alt={user.username} className="card-author-img mr-2"/>
        <h2 className="pt-3">{user.username}</h2>
        { user.description ? <p>{user.description}</p> : <p>You should upload a description</p>}
        <UserRate userId={user._id} />
      </div>
    </div>
  );
}

export default UserInfoCard;