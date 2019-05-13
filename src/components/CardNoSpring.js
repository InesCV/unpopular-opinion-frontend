import React from 'react';
import { Link } from "react-router-dom";

const Card = ({card, respond, index}) => {
  return (
  <div className="card-tryout">
    <p><span>Category: </span>{card.category}</p>
    {/* { card.author.username ? (<p><span>By: </span><Link to={{pathname: `/user/${card.author._id}`}}>{card.author.username}</Link></p>) : (<p></p>)} */}
    { card.author.username ? (<p>By: <Link 
      to={{
      pathname: '/user',
      state: {
        id: card.author._id,
        }
      }
    }>{card.author.username}</Link></p>) : (<p></p>)}
    <p>{card.question}</p>
    <div className="d-flex justify-content-around mt-3">
      <button className="btn btn-primary" onClick={(e)=> {respond(index, 'x')}}>{card.response.x}</button>
      <button className="btn btn-primary" onClick={(e)=> {respond(index, 'y')}}>{card.response.y}</button>
    </div>
  </div>
  )
}

export default Card;
