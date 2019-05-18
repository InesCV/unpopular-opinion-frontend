import React, { useState } from 'react';

import UserRate from "./UserRate";
import MatchRate from "../components/MatchRate";


const UserAffinity = ({ user, userId, path }) => {
  const [notEnoughData, setNotEnoughData] = useState(true);

  return (
    <>
    <div className="cnt-pos">
      <div className="d-flex flex-row">
        <UserRate userId={userId} path={path} username={user.username}/>
        <MatchRate userId={userId} username={user.username} notEnoughData={notEnoughData} setNotEnoughData={setNotEnoughData} />
      </div>
    </div>
    <div>
      { notEnoughData && <p className="log-comment">We don't have enough answers from both users to create an <span>accurate affinity rate between you and {user.username}</span></p>}
    </div>
    </>
  );
}

export default UserAffinity;