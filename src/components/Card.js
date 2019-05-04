import React from 'react';

import opinionService from "../lib/opinion-service";
import statsService from "../lib/statistics-service";
import {types as statTypes} from "../lib/stats-types";

const tryout = {
  margin: 20,
  border: "1px solid black",
  padding: 20
};

export default ({card, respond, index}) => {
  async function resAction(res) {
    await opinionService.response({opinion: card._id, response: res});
    const stat = await statsService.query({type: statTypes.OpinionRate, opinion: card._id});
    console.log(stat);
    respond(index);
  }
  
  return (
  <div style={tryout}>
    <p>Category: {card.category}</p>
    <p>By: {card.author.username}</p>
    <p>Question: {card.question}</p>
    <button className="btn btn-primary" onClick={(e)=> {resAction('x')}}>{card.response.x}</button>
    <button className="btn btn-primary" onClick={(e)=> {resAction('y')}}>{card.response.y}</button>
  </div>
  )
}
