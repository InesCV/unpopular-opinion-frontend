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

  useEffect(() => { 
    statsService.query({
      type: statTypes.OPINION_SCORE,
      opinion: op._id,
    })
    .then(data => {
      setStat(data.stats.xAvg)
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
        <div className="d-flex justify-content-around mt-1">
          <p className="secundary-color">{op.response.x}</p>
          <p className="terciary-color">{op.response.y}</p>
        </div>
      </div>
      <div className="profile-opinion-graph">
        <CircularProgressbar value={stat} text={`${stat}%`} className="cnt-pos circular-uop" />
      </div>
    </div>
  </div>
  )
}
