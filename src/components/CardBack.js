import React from 'react';

import { Link } from "react-router-dom";
import { animated } from 'react-spring';
import { withAuth } from "../lib/AuthProvider";

const CardBack = ({cards, i, opacity, transform, user}) => {
  const path = (user.username === cards[i].author.username) ? '/profile' : '/user';

  return (
    <animated.div className="card back" style={{ opacity, transform: transform.interpolate(t => `${t} rotateY(180deg)`) } }>
      <div className="container author">
          <Link className="card-author-link" to={{
            pathname: path,
            state: {
              id: cards[i].author._id,
            }
          }}> 
            <img className="card-author-img mr-2" src={cards[i].author.avatar} alt={cards[i].author.username}/>
            <h4>{cards[i].author.username}</h4>
          </Link>
          <p className="card-author-description">{cards[i].author.description}</p>
      </div>
    </animated.div>
  )
}

export default withAuth(CardBack);
