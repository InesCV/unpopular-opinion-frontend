import React from 'react';
import { Link } from "react-router-dom";
import { useSpring, useSprings, animated, interpolate } from 'react-spring'


const Card = ({cards, i, opacity, transform, bind, rot, scale, trans}) => {
  return (
    <animated.div className="cards" {...bind(i)} style={{ transform: interpolate([rot, scale], trans) }} >
      <animated.div className="card front" style={{ opacity: opacity.interpolate(o => 1 - o), transform }} >
        <div className="container">
          <div className="pregunta center"><p>{cards[i].question}</p></div>
          <div className="response center">
            <p className="response-arrow center">&#8678;</p>
            <p className="response-text center">{cards[i].response.x}</p>
          </div>
          <div className="response center">
            <p className="response-text center">{cards[i].response.y}</p>
            <p className="response-arrow center">&#8680;</p>
          </div>
        </div>
      </animated.div>
      <animated.div className="card back" style={{ opacity, transform: transform.interpolate(t => `${t} rotateY(180deg)`) } }>
        <div className="container pregunta center"><p>{cards[i].author.username}</p></div>
      </animated.div>
    </animated.div>
  )
}

export default Card;
