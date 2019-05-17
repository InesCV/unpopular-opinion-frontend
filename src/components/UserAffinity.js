import React from 'react';

import UserRate from "./UserRate";
import MatchRate from "../components/MatchRate";


const UserAffinity = ({ user, userId }) => {
  return (
    <div className="cnt-pos">
      <div className="d-flex flex-row">
        <UserRate userId={userId} />
        <MatchRate userId={userId} username={user.username}/>
      </div>
    </div>
  );
}

export default UserAffinity;