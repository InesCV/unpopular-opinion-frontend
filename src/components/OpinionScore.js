import React from 'react';


const OpinionScore = ({skip}) => {
  function backToOpinions() {
    skip();
  }

  return <div className="cnt-pos-total" onClick={ () => {backToOpinions()}}>Paco</div>
}

export default OpinionScore;