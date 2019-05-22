import React, { useState, useEffect } from 'react';

import {statTypes, errorTypes} from "../constants/constants";
import statsService from '../lib/statistics-service';
import { toast } from 'react-toastify';


const CategoryRate = ({ user, toggleHasStat }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [categoryStat, setCategoryStat] = useState(undefined);

  useEffect(() => {
    statsService.query({
      type: statTypes.CATEGORY_RATE,
      user: user._id
    })
    .then(data => {
      console.log(data)
      setCategoryStat (data.stats.avg);
      setIsLoading (false);
      togglehasStat();
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
      <p>Loading...</p>
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
        <button className="btn btn-black" onClick={() => toggleHasStat()}>Back to general stat</button>
      </>
      }
    </>
  )
}

export default CategoryRate;
