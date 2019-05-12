import React, { useState, useEffect } from 'react';

import {spinnerTypes} from "../constants/constants";

import opinionService from "../lib/opinion-service";

import Spinner from "../components/Spinner";

export default ({selected}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  useEffect(() => { 
    opinionService.categories()
    .then(cat => {
      setCategories ([...cat]);
      setIsLoading (false);
    }) 
    .catch((error)=> {
      console.log("Categories couldn't be download from the API");
      console.log(error);
    });
   }, []);

  return (
    <div>
      {
        (isLoading)? 
            <Spinner type={spinnerTypes.SPIN} color={"blue"} />
          : 
            (
              <div className="d-flex flex-wrap">
                {categories.map((category, index) => 
                    <button className="btn btn-primary mt-3 ml-4" key={index} onClick={() => selected(category)}>{category}</button>
                )}
              </div>
            )
      }
    </div>
  );

}