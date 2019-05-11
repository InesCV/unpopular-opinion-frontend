import React from 'react';


const OpinionRate = ({skip, stat}) => {
  function backToOpinions() {
    skip();
  }

  return <div className="cnt-pos-total" onClick={ () => {backToOpinions()}}>You responded as {stat.stats.avg}% of our platform</div>
}

export default OpinionRate;