import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { withAuth } from "../lib/AuthProvider";

import UserRatePreset from './UserRatePreset';
import CategoryRate from './CategoryRate';

import { toast } from 'react-toastify';

import {statTypes, errorTypes} from "../constants/constants";
import statsService from '../lib/statistics-service';

const UserRate = ({userId, username, path}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [responded, setResponded] = useState(true);
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
      } else if (data.message === "Sorry, the user hasn't responded any opinion yet.") {
        setIsLoading (false);
        setResponded(false);
      } else {
        setStat (data.stats.avg);
        setIsLoading (false);
      }
    }) 
    .catch((error)=> {
      console.log(error);
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
        <UserRatePreset stat={50} text={'loading'} statPerCategory={() => statPerCategory()} path={path} username={username}/>
        : 
        <>
        { responded ? 
          <>
          { categoryStat ?
            <CategoryRate categoryStat={categoryStat} setCategoryStat={() => setCategoryStat()}/>
            :
            <UserRatePreset stat={stat} text={`${stat}%`} statPerCategory={() => statPerCategory()} path={path} username={username}/>
          }
          </>
          :
          <>
            <p className="mt-2 mb-2">You <b>have not</b> responded to any opinion</p>
            <Link to="/opinions" className="btn btn-primary" >Respond to opinions</Link>
          </>
        }
        </>
      
      }
    </>
  )
}

export default UserRate;