import React, { useState, useEffect } from 'react';
// import { useSpring, animated } from 'react-spring';
import { withAuth } from "../lib/AuthProvider";

import { toast } from 'react-toastify';

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../sass/stylesheets/styles.scss';

import {statTypes} from "../constants/constants";
import { errorTypes} from "../constants/constants";


import statsService from '../lib/statistics-service';


const UserRate = ({userId}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [stat, setStat] = useState(100);
  const [categoryStat, setCategoryStat] = useState(undefined);

  useEffect(() => { 
    
    statsService.query({
      type: statTypes.USER_RATE,
      user: userId,
    })
    .then(data => {
      if (!data){
        setIsLoading (false);
      } else {
        setStat (data.stats.avg);
        setIsLoading (false);
      }
    }) 
    .catch((error)=> {
      toast.error(`Sorry. ${errorTypes.E500S}`, {
        position: toast.POSITION.BOTTOM_RIGHT
      });
    });
   }, []);

  function statPerCategory  () {
    statsService.query({
      type: statTypes.CATEGORY_RATE,
      user: userId
    })
    .then(data => {
      setCategoryStat (data.stats.avg);
      setIsLoading (false);
    }) 
    .catch((error)=> {
      toast.error(`Sorry. ${errorTypes.E500S}`, {
        position: toast.POSITION.BOTTOM_RIGHT
      });
    });   
  }
  
  return (
    <>
      { isLoading ? 
        <>
          <div className="cnt-pos flex-column">
            <div className="circular-prediv mt-2">
              <CircularProgressbar value={50} text={`loading`} className="cnt-pos circular-secundary" />
            </div>
            <p className="profile-scores-text">Popularity Score</p>
            {/* <button className="btn btn-score mt-4" onClick={statPerCategory}>Analyze score</button> */}
            {/* <p>Your popularity score is <animated.span>{springStat}</animated.span>%</p> */}
          </div>
        </> 
        : 
        <>
          { !categoryStat ?
            <>
            { stat && (
              <div className="cnt-pos flex-column">
                <div className="circular-prediv mt-2">
                  <CircularProgressbar value={stat} text={`${stat}%`} className="cnt-pos circular-secundary"
                    // styles={circular} 
                    />
                </div>
                <p className="profile-scores-text">Popularity Score</p>
                {/* <button className="btn btn-score mt-4" onClick={statPerCategory}>Analyze score</button> */}
                {/* <p>Your popularity score is <animated.span>{springStat}</animated.span>%</p> */}
              </div>
              ) 
            }
            </>
            : 
            <>
              { categoryStat.map((category, index) => 
                <div className="card-tryout" key={index}>
                  <p>Category: {category.category}</p>
                  <p>Your popularity: {category.percent}%</p>
                  <p>From: {category.totalOpinions} users</p>
                </div>) 
              }
                <button className="btn btn-black" onClick={() => setCategoryStat(undefined)}>Back to general stat</button>
            </>
          }
        </>
      }
    </>
  )
}

export default withAuth(UserRate);