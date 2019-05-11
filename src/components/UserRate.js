import React, { useState, useEffect } from 'react';

import statsService from '../lib/statistics-service';
import Spinner from "../components/Spinner";
import {types} from "../lib/spiner-types";
import {types as statTypes} from "../lib/stats-types";
import Loading from 'react-loading';



const UserRate = ({user}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [stat, setStat] = useState(undefined);

  useEffect(() => { 
    statsService.query({type: statTypes.userRate})
    .then(stat => {
      console.log(stat)
      setStat (stat.stats.avg);
      setIsLoading (false);
    }) 
    .catch((error)=> {
      console.log("User statistics couldn't be downloaded from the API");
      console.log(error);
    });
   }, []);

  
  return (
    <>
      { isLoading ? 
        (<>
          <Spinner type={types.Spin} color={"blue"} /> 
        </>) : 
        (<div>
          <p>Your opinions are <span>{stat}%</span> popular</p>
        </div>)
      }
    </>
  )
}

export default UserRate;