import React, { useState, useEffect } from 'react';

import {statTypes} from "../constants/constants";
import {spinnerTypes} from "../constants/constants";

import statsService from '../lib/statistics-service';

import Spinner from "../components/Spinner";

const UserRate = ({user}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [stat, setStat] = useState(undefined);
  const [categoryStat, setCategoryStat] = useState(undefined);

  useEffect(() => { 
    statsService.query({
      type: statTypes.USER_RATE,
      user,
    })
    .then(stat => {
      setStat (stat.stats.avg);
      setIsLoading (false);
    }) 
    .catch((error)=> {
      console.log("User statistics couldn't be downloaded from the API");
      console.log(error);
    });
   }, []);

   function statPerCategory () {
    statsService.query({
      type: statTypes.CATEGORY_RATE,
      user,
    })
    .then(stat => {
      setCategoryStat (stat.stats.avg);
      setIsLoading (false);
    }) 
    .catch((error)=> {
      console.log("The statistics per category couldn't be downloaded from the API");
      console.log(error);
    });   
  }

  
  return (
    <>
      { isLoading ? 
        (<>
          <Spinner type={spinnerTypes.SPIN} color={"blue"} /> 
        </>) : 
        (
        <>
          <div>
            { categoryStat ? ( 
              <>
                { categoryStat.map((category, index) => 
                  <div className="card-tryout" key={index}>
                    <p>Category: {category.category}</p>
                    <p>Your popularity: {category.percent}%</p>
                    <p>From: {category.totalOpinions} users</p>
                  </div>) }
                  <button className="btn btn-black" onClick={() => setCategoryStat(undefined)}>Back to general stat</button>
              </>

            ) : <><p>Popularity score: <button className="btn btn-black" onClick={statPerCategory}>{stat}%</button></p></>}
          </div>
        </>
        )
      }
    </>
  )
}

export default UserRate;