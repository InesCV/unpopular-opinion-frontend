import React, { useState } from 'react';

import UserRate from "./UserRate";
import MatchRate from "../components/MatchRate";


const UserAffinity = ({ user, path }) => {
  const [notEnoughData, setNotEnoughData] = useState(true);

  return (
    <>
    <div className="cnt-pos">
      <div className="d-flex flex-row">
        <UserRate userId={user._id} path={path} username={user.username}/>
        <MatchRate userId={user._id} username={user.username} notEnoughData={notEnoughData} setNotEnoughData={setNotEnoughData} />
      </div>
    </div>
    <div className="mt-2">
      { notEnoughData && <p className="affinity-comment">We don't have enough answers from both users to create an <span className="secondary-color">accurate affinity rate between you and {user.username}</span></p>}
    </div>
    </>
  );
}

export default UserAffinity;