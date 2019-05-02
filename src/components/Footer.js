import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../lib/AuthProvider';


const footer = () =>  
  <div>
    <div>
      Izquierda
    </div>
    <div>
      Descartar
    </div>
    <div>
      Derecha
    </div>
  </div>

export default withAuth(footer);
