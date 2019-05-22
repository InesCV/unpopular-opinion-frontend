import React from 'react';

import UserRate from "./UserRate";

const UserInfoCard = ({ user, toggleIsEditing, toggleHasStat }) => {
  return (
    <div className="cnt-pos">
      <div className="profile-user-card">
        <p className="btn-profile-edit" onClick={toggleIsEditing}><img className="icon icon-home" src="https://image.flaticon.com/icons/svg/181/181540.svg" alt="Edit profile"></img></p>
        <div className="cnt-pos flex-column mt-4">
          <div className="profile-img" style={{ backgroundImage: `url(${user.avatar})`}}/>
          <h2 className="profile-name pt-3">{user.username}</h2>
          { user.description ? <p className="profile-description mb-2">{user.description}</p> : <p>You should upload a description</p>}
          <UserRate userId={user._id} toggleHasStat={toggleHasStat} />
        </div>
      </div>
    </div>
  );
}

export default UserInfoCard;