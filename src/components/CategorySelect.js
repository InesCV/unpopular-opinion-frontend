import React, { useState, useEffect } from 'react';

import opinionService from "../lib/opinion-service";
import {types} from "../lib/spiner-types";
import Spinner from "../components/Spinner";

export default ({selected}) => {
  const [isLoading, setisLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  useEffect(() => { 
    opinionService.categories()
    .then(cat => {
      setCategories ([...cat]);
      setisLoading (false);
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
              categories.map((category, index) => 
                <>
                <br></br>
                <button key={index} onClick={() => selected(category)}>{category}</button>
                </>
              )
            )
      }
    </div>
  );

}