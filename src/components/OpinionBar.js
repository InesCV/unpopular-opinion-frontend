import React from 'react';


const OpinionBar = ({skipRate, stat}) => {
  function backToOpinions() {
    skipRate();
  }
  
  return (
    <div className="nav op-bar">
      <div><button className="btn-op-bar">&#171;</button></div>
      <div><button onClick={backToOpinions} className="btn-op-bar red">&#215;</button></div>
      <div><button className="btn-op-bar">&#187;</button></div>
    </div>
  )
}

export default OpinionBar;