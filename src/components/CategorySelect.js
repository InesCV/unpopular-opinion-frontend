import React, { useState, useEffect } from 'react';

import {errorTypes} from "../constants/constants";
import opinionService from "../lib/opinion-service";
import SpinnerCentral from './SpinnerCentral';
import { toast } from 'react-toastify';

const CategorySelect = ({selected}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  useEffect(() => { 
    opinionService.categories()
    .then(cat => {
      setCategories ([...cat]);
      setIsLoading (false);
    }) 
    .catch((error)=> {
      toast.error(`Sorry. ${errorTypes.E500C}`, {
        position: toast.POSITION.BOTTOM_RIGHT
      });
    });
   }, []);

  return (
    <div>
      { isLoading ? 
        <SpinnerCentral />
        : 
        <div className="d-flex flex-wrap nav-after">
          {categories.map((category, index) => 
              <button className="btn btn-primary mt-3 ml-4" key={index} onClick={() => selected(category)}>{category}</button>
          )}
        </div>    
      }
    </div>
  );
}

export default CategorySelect;