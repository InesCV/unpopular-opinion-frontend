import React from 'react';
import ReactLoading from 'react-loading';

const Spinner = ({ type, color }) => (
  // <ReactLoading type={type} color={color} height={667} width={375} />
	<div className="nav-after cnt-pos align-items-supercenter">
    <ReactLoading type={type} color={"#e3900f"} height={'20%'} width={'10%'}/>
    {/* <p><cite>Las opiniones son como los culos, todos tenemos uno</cite> by Clint Eastwood.</p> */}
  </div>
);

export default Spinner;