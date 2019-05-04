import React from 'react';

// TODO Remove
const tryout = {
  margin: 20,
  border: "1px solid black",
  padding: 20
};

export default ({op, respond, index}) => {
  return (
  <div style={tryout}>
    <p><span>Category: </span>{op.category}</p>
    { op.author.username ? (<p><span>By: </span>{op.author.username}</p>) : (<p></p>)}
    <p>{op.question}</p>
    <div className="d-flex justify-content-around mt-3">
      <div>
        <span>{op.response.x}</span>
        <p>72%</p>
      </div>
      <div>
        <span>{op.response.y}</span>
        <p>28%</p>
      </div>
    </div>
  </div>
  )
}
