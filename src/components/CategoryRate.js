import React, { useState, useEffect } from 'react';

import {statTypes, errorTypes, spinnerTypes} from "../constants/constants";
import statsService from '../lib/statistics-service';
import { toast } from 'react-toastify';
import Spinner from "../components/Spinner";


const CategoryRate = ({ user, toggleHasStat }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [categoryStat, setCategoryStat] = useState(undefined);

  useEffect(() => {
    statsService.query({
      type: statTypes.CATEGORY_RATE,
      user: user._id
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
}, []);

  return (
    <>
      { isLoading ? 
        <div className="d-flex justify-content-center spinner-little mt-5">
          <Spinner type={spinnerTypes.SPIN} color={"blue"} />
        </div>
      :
      <>
        <div className="d-flex flex-wrap flex-row cnt-pos">
          { categoryStat.map((category, index) => 
            <div className="analyze-by-category" key={index}>
              <b>{category.category}</b>
              <p>Your popularity: {category.percent}%</p>
              <p>From: {category.totalOpinions} responses</p>
            </div>) 
          }
        </div>
        <div className="d-flex justify-content-center mt-2">
          <button className="btn btn-primary" onClick={() => toggleHasStat()}>Back to <span className="tertiary-color">Your Opinions</span></button>
        </div>
      </>
      }
    </>
  )
}

export default CategoryRate;
