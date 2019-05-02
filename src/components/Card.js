import React from 'react';

import opinionService from "../lib/opinion-service";

const tryout = {
  margin: 20,
  border: "1px solid black",
  padding: 20
};

export default (card) => {
  console.log(card);
  function resAction(res) {
    const response = {
      opinionId: card._id,
      responseBody: res,
    }
    opinionService.response(response)
  }

  
  return (
  <div style={tryout}>
    <p>{card.category}</p>
    <p>By{card.author.username}</p>
    <p>{card.question}</p>
    <button onClick={(e)=> {resAction('x')}}>{card.response.x}</button>
    <button onClick={(e)=> {resAction('y')}}>{card.response.y}</button>
  </div>
  )
}
