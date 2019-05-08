import React, { useState, useEffect } from "react";

import Navbar from "../components/Navbar";
import CategorySelect from "../components/CategorySelect";
import OpinionForm from "../components/OpinionForm";

export default (props) => {
  const [category, setCategory] = useState(undefined);
  const [opinion, setOpinion] = useState({ question: "", responseX: "", responseY: "" });


  return (
    <div>
      <Navbar {...props}/>
      {
        category? <OpinionForm createOpinion={setOpinion} /> : <CategorySelect selected={setCategory}/>
      }
    </div>
  );

}