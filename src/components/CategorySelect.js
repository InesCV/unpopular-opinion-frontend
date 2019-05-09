import React, { useState, useEffect } from 'react';

import opinionService from "../lib/opinion-service";
import {types} from "../lib/spiner-types";
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
            <Spinner type={types.Spin} color={"blue"} />
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