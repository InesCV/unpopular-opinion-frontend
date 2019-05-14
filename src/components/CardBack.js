import React from 'react';
import { animated } from 'react-spring'

const CardBack = ({cards, i, opacity, transform}) => {
  return (
    <animated.div className="card back" style={{ opacity, transform: transform.interpolate(t => `${t} rotateY(180deg)`) } }>
      <div className="container author"><p>{cards[i].author.username}</p></div>
    </animated.div>
  )
}

export default CardBack;
