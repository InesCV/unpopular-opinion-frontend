import React from 'react';
import { animated, interpolate } from 'react-spring';
import CardFront from '../components/CardFront';
import CardBack from '../components/CardBack';

// import { withDeck } from "../lib/DeckProvider";

const Card = ({cards, i, opacity, transform, bind, rot, scale, trans, isFlipped}) => {
  return (
    <animated.div className="cards" {...bind(i)} style={{ transform: interpolate([rot, scale], trans) }} >
      { isFlipped ? <CardBack cards={cards} i={i} opacity={opacity} transform={transform}/> : <CardFront cards={cards} i={i} opacity={opacity} transform={transform} /> }
    </animated.div>
  )
}

export default Card;
