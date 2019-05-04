import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { withAuth } from '../lib/AuthProvider';


class Navbar extends Component {
  render() {
    
    const { logout, isLoggedin } = this.props;
    console.log(this.props)
  
    return (
      <>
        {isLoggedin ? (
          <div className="nav">
            <Link to='/'>Home</Link>
            <Link to='/opinions'>Opinions</Link>
            <Link to='/opinions/create'>Create Opinion</Link>
            <Link to='/profile'>Profile</Link>
            <Link to='/statistics'>Statistics</Link>
            {/* <button onClick={logout}>Logout</button> */}
          </div>
        ) : (
          <>
            <button><Link to='/login'>Login</Link></button>
            <button><Link to='/signup'>Signup</Link></button>
          </>
        )} 
      </>
    );
  }
}

export default withAuth(Navbar);
