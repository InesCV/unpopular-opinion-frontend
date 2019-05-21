import React from 'react';
import { Link } from 'react-router-dom';


function NotFound(props) {
  return (
    <div className="full-height d-flex flex-row">
      <div className="cnt-pos error-text super-container">
        <h2 className="secondary-color"> Error</h2>
        <h4>Congratulations, you broke the <del>fucking</del> site. I bet you are waiting for us to tell you what happened, well basically you did something no one liked, so <del>fuck you</del>.</h4>
      </div>
      <Link to="/opinions" className="bg-error-img cnt-pos super-container">
        <h3>Back to Unpopular Opinion</h3>
      </Link>
    </div>
  )
}

export default NotFound;