import React, { useState } from 'react';

import {statTypes} from "../constants/constants";

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
      console.log("The match couldn't be downloaded from the API");
      console.log(error);
    });
   };
  
  return (
    <>
      { match ? <p>Your affinity to {username} is <span>{match}%</span></p> :  <p className="pt-3">Check your affinity with {username} <button className="btn btn-black" onClick={() => getMatch()}>Check</button></p>}
    </>
  )
}

export default MatchRate;