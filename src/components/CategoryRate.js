import React from 'react';

const CategoryRate = ({ categoryStat, setCategoryStat }) => {
  return (
    <>
      { categoryStat.map((category, index) => 
        <div className="card-tryout" key={index}>
          <p>Category: {category.category}</p>
          <p>Your popularity: {category.percent}%</p>
          <p>From: {category.totalOpinions} users</p>
        </div>) 
      }
        <button className="btn btn-black" onClick={() => setCategoryStat(undefined)}>Back to general stat</button>
    </>
  )
}

export default CategoryRate;
