import React from 'react';

const CategoryRate = ({ categoryStat, setCategoryStat }) => {
  return (
    <>
      <div className="d-flex flex-wrap flex-row cnt-pos">
        { categoryStat.map((category, index) => 
          <div className="analyze-by-category" key={index}>
            <b>{category.category}</b>
            <p>Your popularity: {category.percent}%</p>
            <p>From: {category.totalOpinions} responses</p>
          </div>) 
        }
      </div>
      <button className="btn btn-black" onClick={() => setCategoryStat(undefined)}>Back to general stat</button>
    </>
  )
}

export default CategoryRate;
