import React from 'react';
import { Link } from "react-router-dom";

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
    {/* { op.author.username ? (<p><span>By: </span><Link to={{pathname: `/user/${op.author._id}`}}>{op.author.username}</Link></p>) : (<p></p>)} */}
    { op.author.username ? (<p>By: <Link 
      to={{
      pathname: '/user',
      state: {
        id: op.author._id,
        }
      }
    }>{op.author.username}</Link></p>) : (<p></p>)}
    <p>{op.question}</p>
    <div className="d-flex justify-content-around mt-3">
      <button className="btn btn-primary" onClick={(e)=> {respond(index, 'x')}}>{op.response.x}</button>
      <button className="btn btn-primary" onClick={(e)=> {respond(index, 'y')}}>{op.response.y}</button>
    </div>
  </div>
  )
}
