import React from 'react';

import opinionService from "../lib/opinion-service";

const tryout = {
  margin: 20,
  border: "1px solid black",
  padding: 20
};

export default ({card, respond, index}) => {
  function resAction(res) {
    const response = {
      opinionId: card._id,
      responseBody: res,
    }
    respond(index);
    opinionService.response(response)
  }
  
  return (
  <div style={tryout}>
    <p>Category: {card.category}</p>
    <p>By: {card.author.username}</p>
    <p>Question: {card.question}</p>
    <button onClick={(e)=> {resAction('x')}}>{card.response.x}</button>
    <button onClick={(e)=> {resAction('y')}}>{card.response.y}</button>
  </div>
  )
}
