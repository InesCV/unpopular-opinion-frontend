import React from 'react';

import opinionService from "../lib/opinion-service";

const tryout = {
  margin: 20,
  border: "1px solid black",
  padding: 20
};

export default (question) => {
  function resAction(res) {
    const response = {
      opinionId: question._id,
      responseBody: res,
    }
    opinionService.response(response)
  }

  
  return (
  <div style={tryout}>
    <p>{question.author.username}</p>
    <p>{question.question}</p>
    <button onClick={(e)=> {resAction('x')}}>{question.response.x}</button>
    <button onClick={(e)=> {resAction('y')}}>{question.response.y}</button>
  </div>
  )
}
