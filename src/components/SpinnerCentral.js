import React from 'react';

import {spinnerTypes} from "../constants/constants";
import Spinner from "../components/Spinner";

const SpinnerCentral = () => (
	<div className="nav-after cnt-pos align-items-supercenter">
    <Spinner type={spinnerTypes.SPIN}s />
  </div>
);

export default SpinnerCentral;