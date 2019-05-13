import React from 'react';
import { animated } from 'react-spring'

const CardFront = ({cards, i, opacity, transform}) => {
  return (
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
  )
}

export default CardFront;
