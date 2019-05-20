import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { withAuth } from '../lib/AuthProvider';


class Navbar extends Component {

  handlelOnClick(logout) {
    logout();
    this.props.history.push(`/`);
  }

  navPath = (path) => {
    switch (path) {
      case '/':
        return (
          <div className="nav nav-home">
            <Link to="/profile">Profile</Link>
            <Link to="/opinions" className="btn btn-tertiary">Opinions</Link>
            {/* <Link to='/opinions'><img className="icon icon-home" src="https://image.flaticon.com/icons/svg/181/181521.svg" alt="Opinions"></img></Link>
            <Link to='/opinions/create'><img className="icon icon-home" src="https://image.flaticon.com/icons/svg/181/181518.svg" alt="Create Opinions"></img></Link>
            <Link to='/profile'><img className="icon icon-home" src="https://image.flaticon.com/icons/svg/181/181549.svg" alt="Profile"></img></Link> */}
          </div>
        );
      case '/opinions/create':
        return (
          <div className="nav">
            <Link to='/opinions'><img className="icon" src="https://image.flaticon.com/icons/svg/181/181521.svg" alt="Opinions"></img></Link>
            <Link to='/profile'><img className="icon" src="https://image.flaticon.com/icons/svg/181/181549.svg" alt="Profile"></img></Link>
          </div>
        );
      case '/opinions':
        return (
          <div className="nav">
            <Link to='/profile'><img className="icon" src="https://image.flaticon.com/icons/svg/181/181549.svg" alt="Profile"></img></Link>
            {/* <img className="icon-1" src="https://image.flaticon.com/icons/svg/181/181549.svg" alt="Profile"></img> */}
            <Link to="/InMyZone"><img className="icon" src="https://image.flaticon.com/icons/svg/181/181508.svg" alt="In my zone"></img></Link>
            <Link to='/opinions/create'><img className="icon" src="https://image.flaticon.com/icons/svg/181/181518.svg" alt="Create Opinions"></img></Link>

          </div>
        );
      case '/profile':
        return (
          <div className="nav">
            <Link to='/opinions'><img className="icon" src="https://image.flaticon.com/icons/svg/181/181521.svg" alt="Opinions"></img></Link>
            <Link to='/opinions/create'><img className="icon" src="https://image.flaticon.com/icons/svg/181/181518.svg" alt="Create Opinions"></img></Link>
          </div>
        );
      default:
        return (
          <div className="nav">
            <Link to='/opinions'><img className="icon" src="https://image.flaticon.com/icons/svg/181/181521.svg" alt="Opinions"></img></Link>
            <Link to='/opinions/create'><img className="icon" src="https://image.flaticon.com/icons/svg/181/181518.svg" alt="Create Opinions"></img></Link>
            <Link to='/profile'><img className="icon" src="https://image.flaticon.com/icons/svg/181/181549.svg" alt="Profile"></img></Link>
          </div>
        )
    }
  };

  render() {
    const { isLoggedin } = this.props;
    const { path } = this.props.match;
    return (
      <>
        {isLoggedin ?  
          <div> { this.navPath(path) } </div>
          :
          <div className="nav nav-home">
            <Link to="/login">Log in</Link>
            <Link to="/signup" className="btn btn-tertiary">Sign up</Link>
          </div>
        } 
      </>
    );
  }
}

export default withAuth(Navbar);
