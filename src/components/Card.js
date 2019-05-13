import React from 'react';
import { animated, interpolate } from 'react-spring';
import CardFront from '../components/CardFront';
import CardBack from '../components/CardBack';

// import { withDeck } from "../lib/DeckProvider";

const Card = ({cards, i, opacity, transform, bind, rot, scale, trans}) => {
  return (
    <animated.div className="cards nav-after-m" {...bind(i)} style={{ transform: interpolate([rot, scale], trans) }} >
      <CardFront cards={cards} i={i} opacity={opacity} transform={transform}/>
      <CardBack cards={cards} i={i} opacity={opacity} transform={transform}/>
    </animated.div>
  )
}

export default Card;
