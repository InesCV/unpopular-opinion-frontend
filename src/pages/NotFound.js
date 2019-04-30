import React from 'react';

import { withAuth } from "../lib/AuthProvider";

function NotFound(props) {
  console.log(props)
  return (
    <div>
      <h2> Error</h2>
      <h3><span>Congratulations {props.user.username}</span>, you broke the <del>fucking</del> site. I bet you are waiting for us to tell you what happened, well basically you did something no one liked, so <del>fuck you</del>.</h3>
    </div>
  )
}

export default withAuth(NotFound);