import React, { useState } from 'react';
import { toast } from 'react-toastify';

import {statTypes, errorTypes} from "../constants/constants";

import statsService from '../lib/statistics-service';

const MatchRate = ({userId, username}) => {
  const [match, setMatch] = useState(undefined);
  
  function getMatch() { 
    statsService.query({
      type: statTypes.MATCH_RATE,
      userMatch: userId,
    })
    .then(data => {
      setMatch (data.avg);
    }) 
    .catch((error)=> {
      toast.error(`Sorry. ${errorTypes.E500S}`, {
        position: toast.POSITION.BOTTOM_RIGHT
      });
    });
   };
  
  return (
    <>
      { match ? <p>Your affinity to {username} is <span>{match}%</span></p> :  <p className="pt-3">Check your affinity with {username} <button className="btn btn-black" onClick={() => getMatch()}>Check</button></p>}
    </>
  )
}

export default MatchRate;