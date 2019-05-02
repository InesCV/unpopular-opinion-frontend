import React from 'react';
import ReactLoading from 'react-loading';

const Spinner = ({ type, color }) => (
  // <ReactLoading type={type} color={color} height={667} width={375} />
	<>
    <ReactLoading type={type} color={color} height={'20%'} width={'20%'} />
    <p>Clint Eastwood</p>
  </>
);

export default Spinner;