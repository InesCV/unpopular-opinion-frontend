import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../lib/AuthProvider';


class Navbar extends Component {
  render() {
    const { logout, isLoggedin } = this.props;
  
    return (
      <div>
        {isLoggedin ? (
          <>
            <button><Link to='/'>Home</Link></button>
            <button><Link to='/opinions'>Opinions</Link></button>
            <button><Link to='/opinions/create'>Create Opinion</Link></button>
            <button onClick={logout}>Logout</button>
            <p></p>
          </>
        ) : (
          <>
            <Link to='/login'>Login</Link>
            <Link to='/signup'>Signup</Link>
          </>
        )}
      </div>
    );
  }
}

export default withAuth(Navbar);
