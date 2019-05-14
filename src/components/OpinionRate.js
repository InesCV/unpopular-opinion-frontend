import React from 'react';


const OpinionRate = ({skipRate, stat}) => {
  function backToOpinions() {
    skipRate();
  }
  
  return <div className="cnt-pos-total" onClick={ () => {backToOpinions()}}>You responded as {stat.stats.avg}% of our platform</div>
}

export default OpinionRate;