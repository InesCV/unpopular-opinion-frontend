import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring'

import { toast } from 'react-toastify';

import {statTypes} from "../constants/constants";
import {spinnerTypes, errorTypes} from "../constants/constants";

import statsService from '../lib/statistics-service';

import Spinner from "../components/Spinner";

const UserRate = ({userId}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [stat, setStat] = useState(100);
  const [categoryStat, setCategoryStat] = useState(undefined);
  // const [springStat, setSpringStat] = useState(undefined);


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
        // const number = useSpring({ number: 100, from: { number: 0 } });
        // setSpringStat(number);
        // console.log('paco')
        // console.log(springStat)
      }
    }) 
    .catch((error)=> {
      toast.error(`Sorry. ${errorTypes.E500S}`, {
        position: toast.POSITION.BOTTOM_RIGHT
      });
    });
   }, []);
   
  // const AnimatedDonut = animated(Donut);
  // const springStat = useSpring({ number: 100, from: { number: 0 } })
  // console.log(springStat)


  

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
          <p>And your popularity score is ...</p>
        </> 
        : 
        <>
          { !categoryStat ?
            <>
            { stat && (
              <div>
                <p>Popularity score: <button className="btn btn-black" onClick={statPerCategory}>{stat}%</button></p>
                <button className="btn btn-black" onClick={statPerCategory}>Analyze score</button>
                {/* <p>Your popularity score is <animated.span>{springStat}</animated.span>%</p> */}
              </div>
              ) }
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

export default UserRate;