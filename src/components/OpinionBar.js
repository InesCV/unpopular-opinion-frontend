import React from 'react';


const OpinionBar = ({skipRate, stat}) => {
  function backToOpinions() {
    skipRate();
  }
  
  return (
    <div className="nav op-bar">
      <div><a>LEFT</a></div>
      <div><a>X</a></div>
      <div><a>RIGHT</a></div>
    </div>
  )
}

export default OpinionBar;