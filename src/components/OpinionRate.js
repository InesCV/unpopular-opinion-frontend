import React from 'react';
import { CircularProgressbar} from 'react-circular-progressbar';


const OpinionRate = ({skipRate, stat}) => {  
  // return <div className="cnt-pos-total" onClick={ () => {backToOpinions()}}>You responded as {stat.stats.avg}% of our platform</div>
  return (
    <div onClick={() => skipRate()}>
      <p className="nav-after opscore-cross"> &#10008;</p>
      <div className="cnt-pos-total" >
        <div className="cnt-pos flex-column">
          <div className="circular-prediv mt-2 cnt-pos profile-opinion-graph-big d-flex flex-column">
            <CircularProgressbar value={stat.stats.avg} text={`${stat.stats.avg}%`} className="cnt-pos circular-secondary" />
          </div>
          <div className="container-big mt-4">
            <p className="mt-4">Of the users thought the same way you did</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OpinionRate;