import React from 'react';
import { animated } from 'react-spring'

const CardFront = ({cards, i, opacity, transform, chosenX, chosenY}) => {
  return (
    <animated.div className="card front" style={{ opacity: opacity.interpolate(o => 1 - o), transform }} >
      <div className="card-container">
        <div className="pregunta"><p>{cards[i].question}</p></div>
        <div className="response">
          {/* <p className="response-arrow">&#171;</p> */}
          <p className="response-arrow response-text-left secondary-color" style={chosenX}>&#171;</p>
          <p className="response-text response-text-left secondary-color mr-2" style={chosenX}>{cards[i].response.x}</p>
          <p className="response-text response-text-right tertiary-color ml-2" style={chosenY}>{cards[i].response.y} </p>
          <p className="response-arrow response-text-right tertiary-color"style={chosenY}>&#187; </p>
        </div>
        {/* <div className="response">
          <p className="response-arrow">&#187;</p>
        </div> */}
      </div>
    </animated.div>
  )
}

export default CardFront;
