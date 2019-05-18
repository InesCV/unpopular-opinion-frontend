import React from 'react';
import ReactLoading from 'react-loading';

const Spinner = ({ type, color }) => (
  // <ReactLoading type={type} color={color} height={667} width={375} />
	<div className="nav-after">
    <ReactLoading type={type} color={color} height={'20%'} width={'20%'} className="cnt-pos"/>
    {/* <p><cite>Las opiniones son como los culos, todos tenemos uno</cite> by Clint Eastwood.</p> */}
  </div>
);

export default Spinner;