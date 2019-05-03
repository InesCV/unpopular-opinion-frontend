import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { withAuth } from '../lib/AuthProvider';


class Navbar extends Component {
  render() {
    
    const { logout, isLoggedin } = this.props;
  
    return (
      <div className="nav">
        {isLoggedin ? (
          <>
            <button className="btn"><Link to='/'>Home</Link></button>
            <button className="btn"><Link to='/opinions'>Opinions</Link></button>
            <button className="btn"><Link to='/opinions/create'>Create Opinion</Link></button>
            <button className="btn"><Link to='/profile'>Profile</Link></button>
            <button className="btn"><Link to='/statistics'>Statistics</Link></button>
            <button onClick={logout} className="btn">Logout</button>
            <p></p>
          </>
        ) : (
          <>
            <button className="btn"><Link to='/login'>Login</Link></button>
            <button className="btn"><Link to='/signup'>Signup</Link></button>
          </>
        )} 
      </div>
    );
  }
}

export default withAuth(Navbar);
