import React from 'react';

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../sass/stylesheets/styles.scss';

export default ({op}) => {
  const stat = 25;
  const circular = {
    path: {
      // Path color
      stroke: `#ee7968`,
    },
    text: {
      // Text color
      fill: '#ee7968',
    }
  }

  return (
  <div className="profile-opinion-card mt-2 mb-4">
    <div className="d-flex">
      <div className="profile-opinion-text">
        <p className="text-left">{op.question}</p>
        <div className="d-flex justify-content-around mt-1">
          <p className="terciary-color">{op.response.x}</p>
          <p className="primary-color">{op.response.y}</p>
        </div>
      </div>
      <div className="profile-opinion-graph">
        <CircularProgressbar value={stat} text={`${stat}%`} className="cnt-pos circular CircularProgressbar-pathtwo CircularProgressbar-trailtwo" 
          styles={circular} 
        />
      </div>
    </div>
  </div>
  )
}
