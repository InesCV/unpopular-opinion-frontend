import React, { useState, useEffect } from 'react';

import statsService from '../lib/statistics-service';
import Spinner from "../components/Spinner";
import {types} from "../lib/spiner-types";
import {types as statTypes} from "../lib/stats-types";

// TODO Remove
const tryout = {
  margin: 20,
  border: "1px solid black",
  padding: 20
};

const UserRate = ({user}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [stat, setStat] = useState(undefined);
  const [categoryStat, setCategoryStat] = useState(undefined);

  useEffect(() => { 
    statsService.query({
      type: statTypes.userRate,
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
      type: statTypes.categoryRate,
      user,
    })
    .then(stat => {
      console.log(stat.stats.avg)
      setCategoryStat (stat.stats.avg);
      setIsLoading (false);
    }) 
    .catch((error)=> {
      console.log("User statistics couldn't be downloaded from the API");
      console.log(error);
    });   }

  
  return (
    <>
      { isLoading ? 
        (<>
          <Spinner type={types.Spin} color={"blue"} /> 
        </>) : 
        (
        <>
          <div>
            { categoryStat ? ( 
              <>
                { categoryStat.map((category) => 
                  <div style={tryout}>
                    <p>Category: {category.category}</p>
                    <p>Your popularity: {category.percent}%</p>
                    <p>From: {category.totalOpinions} users</p>
                  </div>) }
                  <button className="btn btn-black" onClick={() => setCategoryStat(undefined)}>Back to general stat</button>
              </>

            ) : <><p>Your opinions are <button className="btn btn-black" onClick={statPerCategory}>{stat}%</button> popular</p></>}
          </div>
        </>
        )
      }
    </>
  )
}

export default UserRate;