import React from 'react';

// TODO Remove
const tryout = {
  margin: 20,
  border: "1px solid black",
  padding: 20
};

export default ({op}) => {
  return (
  <div className="card-tryout">
    <p>{op.question}</p>
    <div className="d-flex justify-content-around mt-3">
      <div>
        <span>{op.response.x}</span>
      </div>
      <div>
        <span>{op.response.y}</span>
      </div>
    </div>
  </div>
  )
}
