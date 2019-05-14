import React from 'react';


const OpinionBar = ({skipRate, stat}) => {
  function backToOpinions() {
    skipRate();
  }
  
  return (
    <div className="nav op-bar">
      <div><button className="btn-op-bar">LEFT</button></div>
      <div><button className="btn-op-bar red">X</button></div>
      <div><button className="btn-op-bar">RIGHT</button></div>
    </div>
  )
}

export default OpinionBar;