import React, {useState, useEffect} from 'react';

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
   }, [isLoading]);

  const handleFormSubmit = e => {
    e.preventDefault();
    selected(() => e.target.category );
  };

  return (
    <div>
      {
        (categories.length <= 0)? 
            <Spinner type={types.Spin} color={"blue"} />
          : 
            (
              <form className="container pt-3" onSubmit={handleFormSubmit}>
              <label>Category:</label>
              <select
                name="category"
              >
                <option value="select">- Select your category -</option>
                { categories.map((category, index) => {
                  return <option key={index} value={category}>{category}</option>
                })}
              </select>
              <input type="submit" value="Create opinion" />
              </form>
            )
      }
    </div>
  );

}