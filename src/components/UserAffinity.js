import React from 'react';

import UserRate from "./UserRate";
import MatchRate from "../components/MatchRate";


const UserAffinity = ({ user, userId, path }) => {
  return (
    <div className="cnt-pos">
      <div className="d-flex flex-row">
        <UserRate userId={userId} path={path} username={user.username}/>
        <MatchRate userId={userId} username={user.username}/>
      </div>
    </div>
  );
}

export default UserAffinity;