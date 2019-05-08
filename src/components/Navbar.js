import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { withAuth } from '../lib/AuthProvider';


class Navbar extends Component {

  navPath = (path) => {
    switch (path) {
      case '/':
        return (
          <div className="nav-home">
            <Link to='/opinions'>Opinions</Link>
            <Link to='/opinions/create'>Create Opinion</Link>
            <Link to='/profile'>Profile</Link>
          </div>
        );
      case '/opinions/create':
        return (
          <div className="nav">
            <Link to='/opinions'>Opinions</Link>
            <Link to='/profile'>Profile</Link>
          </div>
        );
      case '/opinions':
        return (
          <div className="nav">
            <Link to='/profile'>Profile</Link>
            <Link to='/opinions/create'>Create Opinion</Link>
            <Link to='/statistics'>Stats</Link>
          </div>
        );
      case '/profile':
        return (
          <div className="nav">
            <Link to='/opinions'>Opinions</Link>
            <Link to='/opinions/create'>Create Opinion</Link>
            <Link to='/statistics'>Stats</Link>
          </div>
        );
      default:
        return (
          <div className="nav">
            <Link to='/opinions'>Opinions</Link>
            <Link to='/opinions/create'>Create Opinion</Link>
            <Link to='/profile'>Profile</Link>
            <Link to='/statistics'>Stats</Link>
          </div>
        )
    }
  };

  render() {
    const { isLoggedin } = this.props;
    const { path } = this.props.match;
    return (
      <>
        {isLoggedin ? ( 
          <div>
            { this.navPath(path) }
          </div>
        ) : (
          <div className="nav-home">
            <Link to='/login'>Login</Link>
            <Link to='/signup'>Signup</Link>
          </div>
        )} 
      </>
    );
  }
}

export default withAuth(Navbar);
