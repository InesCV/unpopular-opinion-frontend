import React from 'react';
import { render } from "react-dom";

import Icon from './nav';

const styles = {
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  fontFamily: "sans-serif",
  justifyContent: "space-between"
};

const Icons = () => (
  <div style={styles}>
    <Icon name="profile" width={100} fill={'red'} />
    <Icon name="createopinion" width={100} fill={'red'} />
    <Icon name="opinions" width={100} fill={'red'} />
  </div>
);

// const Icons = (name) => {
//   const getPath = (name, props) => {
//     switch(name) {
//       case 'profile':
//         return <path {...props} d="/public/icons/nav/profile.svg" />;
//       case 'editprofile':
//         return <path {...props} d="/public/icons/nav/editprofile.svg" />;
//       default:
//         return <path />;
//     }
//   }

//   const SVG = ({
//     name = '',
//     style = {},
//     fill = '#000',
//     width = '100%',
//     className = '',
//     height = '100%',
//     viewBox = '0 0 32 32',
//   })

//   return 

// }

export default Icons;