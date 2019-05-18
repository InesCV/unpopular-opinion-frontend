import React from 'react';
// import { useSpring, animated } from 'react-spring';
import { withAuth } from "../lib/AuthProvider";

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../sass/stylesheets/styles.scss';


const UserRatePreset = ({stat, text, statPerCategory, username, path}) => {
  
  return (
    <>
    { stat && 
      <div className="cnt-pos flex-column">
        <div className="circular-prediv mt-2">
          <CircularProgressbar value={stat} text={text} className="cnt-pos circular-secundary" />
        </div>
        { (path !== "/user") ? <p className="profile-scores-text">Your Popularity Score</p> : <p className="profile-scores-text">{username}'s Popularity Score</p> }
        { (path !== "/user") && <button className="btn btn-score mt-4" onClick={statPerCategory}>Analyze score</button>}
        {/* <p>Your popularity score is <animated.span>{springStat}</animated.span>%</p> */}
      </div>
    }
  </>
  )
}

export default UserRatePreset;