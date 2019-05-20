import React from 'react';
import { animated } from 'react-spring'

const CardFront = ({cards, i, opacity, transform}) => {
  return (
    <animated.div className="card front" style={{ opacity: opacity.interpolate(o => 1 - o), transform }} >
      <div className="card-container">
        <div className="pregunta"><p>{cards[i].question}</p></div>
        <div className="response">
          {/* <p className="response-arrow">&#171;</p> */}
          <p className="response-arrow response-text-left secondary-color">&#171;</p>
          <p className="response-text response-text-left secondary-color mr-2">{cards[i].response.x}</p>
          <p className="response-text response-text-right tertiary-color ml-2">{cards[i].response.y} </p>
          <p className="response-arrow response-text-right tertiary-color">&#187; </p>
        </div>
        {/* <div className="response">
          <p className="response-arrow">&#187;</p>
        </div> */}
      </div>
    </animated.div>
  )
}

export default CardFront;
