import React from 'react';


const OpinionBar = ({skipRate, respond, cards}) => {
  function backToOpinions() {
    skipRate();
  }
  
  return (
    <div className="nav op-bar">
      <div><button onClick={() => respond((cards.length -1), 'x')} className="btn-op-bar">&#171;</button></div>
      <div><button onClick={backToOpinions} className="btn-op-bar btn-op-bar-red mr-4 ml-4">&#215;</button></div>
      <div><button onClick={() => respond((cards.length -1), 'y')} className="btn-op-bar">&#187;</button></div>
    </div>
  )
}

export default OpinionBar;