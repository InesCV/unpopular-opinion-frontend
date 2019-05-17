import React, { useState, useEffect } from 'react';

import { toast } from 'react-toastify';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../sass/stylesheets/styles.scss';

import {statTypes, errorTypes} from "../constants/constants";

import statsService from '../lib/statistics-service';

const MatchRate = ({userId, username}) => {
  const [match, setMatch] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => { 
    statsService.query({
      type: statTypes.MATCH_RATE,
      userMatch: userId,
    })
    .then(data => {
      setMatch (data.avg);
      setIsLoading(false);
    }) 
    .catch((error)=> {
      toast.error(`Sorry. ${errorTypes.E500S}`, {
        position: toast.POSITION.BOTTOM_RIGHT
      });
    });
   }, []);

  return (
    <>
      { isLoading ? 
      <>
        <div className="cnt-pos flex-column">
          <div className="circular-prediv mt-2">
            <CircularProgressbar value={50} text={`loading`} className="cnt-pos circular-secundary" />
          </div>
          <p className="profile-scores-text">Your Affinity with {username}</p>
        </div>
      </> 
      : 
      <>
        <div className="cnt-pos flex-column">
          <div className="circular-prediv mt-2">
            <CircularProgressbar value={match} text={`${match}%`} className="cnt-pos circular-secundary" />
          </div>
          <p className="profile-scores-text">Your affinity with {username}</p>
        </div>      
      </>
      }
    </>
  )
}

export default MatchRate;