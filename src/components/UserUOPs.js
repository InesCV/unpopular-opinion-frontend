import React, { useState, useEffect} from 'react';

import { toast } from 'react-toastify';

import {statTypes, errorTypes} from "../constants/constants";
import statsService from '../lib/statistics-service';


import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../sass/stylesheets/styles.scss';


export default ({op}) => {
  // const [isLoading, setIsLoading] = useState(true);
  const [stat, setStat] = useState(50);
  const [notEnoughData, setNotEnoughData] = useState(true);


  useEffect(() => { 
    statsService.query({
      type: statTypes.OPINION_SCORE,
      opinion: op._id,
    })
    .then(data => {
      if (data.message = `Sorry, this Opinion doesn't have any response yet`) {
        setStat(50);
        setNotEnoughData(true);
        // setIsLoading(false);
      } else {
      setStat(data.stats.xAvg)
      }
    }) 
    .catch((error)=> {
      toast.error(`Sorry. ${errorTypes.E500S}`, {
        position: toast.POSITION.BOTTOM_RIGHT
      });
    });
   }, []);

  return (
  <div className="profile-opinion-card mt-2 mb-4">
    <div className="d-flex">
      <div className="profile-opinion-text">
        <p className="text-left">{op.question}</p>
        <ul className="d-flex flex-column mt-2 ml-4">
          <li className="secundary-color d-flex justify-content-start">&#9724;  {op.response.x}</li>
          <li className="terciary-color d-flex justify-content-start">&#9724;  {op.response.y}</li>
        </ul>
      </div>
      <div className="profile-opinion-graph">
        { notEnoughData ? <CircularProgressbar value={50} text={'no data'} className="cnt-pos circular-red" /> : <CircularProgressbar value={stat} text={`${stat}%`} className="cnt-pos circular-uop" />}
      </div>
    </div>
    <div>
      { notEnoughData && <p className="log-comment mt-2">No one has responded to that opinion yet</p> }
    </div>
  </div>
  )
}
