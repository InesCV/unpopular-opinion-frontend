import React from 'react';

import opinionService from "../lib/opinion-service";
import statsService from "../lib/statistics-service";
import {types as statTypes} from "../lib/stats-types";

const tryout = {
  margin: 20,
  border: "1px solid black",
  padding: 20
};

export default ({op, respond, index}) => {
  async function resAction(res) {
    // Register the response to the opinion
    await opinionService.response({opinion: op._id, response: res});
    // Consult the statistics of the opinion the user just responded to
    const stat = await statsService.query({type: statTypes.opinionRate, opinion: op._id});
    console.log(stat);
    respond(index);
  }
  
  return (
  <div style={tryout}>
    <p>Category: {op.category}</p>
    <p>By: {op.author.username}</p>
    <p>Question: {op.question}</p>
    <div className="d-flex justify-content-around mt-3">
      <button className="btn btn-primary" onClick={(e)=> {resAction('x')}}>{op.response.x}</button>
      <button className="btn btn-primary" onClick={(e)=> {resAction('y')}}>{op.response.y}</button>
    </div>
  </div>
  )
}
