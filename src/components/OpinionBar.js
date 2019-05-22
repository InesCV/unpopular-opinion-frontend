import React from 'react';


const OpinionBar = ({isResponded, respond, cards, skipOpinion}) => {

  function handleClick(event) {
    if (!isResponded) {
      if (event.target.id === 'skip') {
        skipOpinion((cards.length -1));
      } else {
        respond((cards.length -1), `${event.target.id}`);
      }
    }
  }
  
  return (
    <div className="nav op-bar">
      <div><button id='x' onClick={ handleClick } className="btn-op-bar">&#171;</button></div>
      <div><button id='skip' onClick={ handleClick } className="btn-op-bar btn-op-bar-red mr-4 ml-4">&#215;</button></div>
      <div><button id='y' onClick={ handleClick } className="btn-op-bar">&#187;</button></div>
    </div>
  )
}

export default OpinionBar;