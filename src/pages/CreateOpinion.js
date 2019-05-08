import React, { useState, useEffect } from 'react';

import opinionService from "../lib/opinion-service";
import Navbar from "../components/Navbar";
import CategorySelect from "../components/CategorySelect";
import OpinionForm from "../components/OpinionForm";

export default (props) => {
  const [category, setCategory] = useState(undefined);
  const [opinion, setOpinion] = useState(undefined);
  
  useEffect(() => {
    if (opinion) {
      const newOpinion = { 
        category, 
        question: opinion.question, 
        response: {
          x: opinion.responseX,
          y: opinion.responseY,
        } 
      };
      opinionService.create(newOpinion)
      .then(createdOpinon => {
        console.log(createdOpinon);
        props.history.push(`/profile`);
      })
      .catch((error) => {
        console.log("Opinion couldn't be created.")
        console.log(error)
      })
    }
  }, [opinion]);

  console.log(props)

  return (
    <div>
      <Navbar {...props}/>
      {
        category? <OpinionForm sendOpinion={setOpinion}/> 
        : 
        <CategorySelect selected={setCategory}/>
      }
    </div>
  );
}