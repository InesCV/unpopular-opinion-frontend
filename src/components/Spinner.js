import React from 'react';

import ReactLoading from 'react-loading';

const Spinner = ({ type, color }) => (
  <ReactLoading type={type} color={"#e3900f"} height={'20%'} width={'10%'}/>
);

export default Spinner;