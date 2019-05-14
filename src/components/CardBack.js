import React from 'react';

import { Link } from "react-router-dom";
import { animated } from 'react-spring';
import { withAuth } from "../lib/AuthProvider";

const CardBack = ({cards, i, opacity, transform, user}) => {
  const path = (user.username === cards[i].author.username) ? '/profile' : '/user';

  return (
    <animated.div className="card back" style={{ opacity, transform: transform.interpolate(t => `${t} rotateY(180deg)`) } }>
      <div className="container author">
        <Link to={{
          pathname: path,
          state: {
            id: cards[i].author._id,
          }
        }} >{cards[i].author.username}</Link>
      </div>
    </animated.div>
  )
}

export default withAuth(CardBack);
