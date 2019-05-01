import React from 'react';

const tryout = {
  margin: 20,
  border: "1px solid black",
  padding: 20
};

export default (question) => (
  <div style={tryout}>
    <p>{question.author.username}</p>
    <p>{question.question}</p>
    <p>{question.response.x}</p>
    <p>{question.response.y}</p>
  </div>
)
