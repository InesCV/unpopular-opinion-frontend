import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { withAuth } from '../lib/AuthProvider';
// import Icons from './Icons'


class Navbar extends Component {

  handlelOnClick(logout) {
    logout();
    this.props.history.push(`/`);
  }

  navPath = (path) => {
    switch (path) {
      case '/':
        return (
          <div className="nav-home">
            <Link to='/opinions'>Opinions</Link>
            <Link to='/opinions/create'>Create</Link>
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
          <div className="nav-tryout">
            {/* <svg
              width="100%"
              height="100%"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
                <path d="M149.996,0C67.157,0,0.001,67.158,0.001,149.997c0,82.837,67.156,150,149.995,150s150-67.163,150-150
			C299.996,67.156,232.835,0,149.996,0z M150.453,220.763v-0.002h-0.916H85.465c0-46.856,41.152-46.845,50.284-59.097l1.045-5.587
			c-12.83-6.502-21.887-22.178-21.887-40.512c0-24.154,15.712-43.738,35.089-43.738c19.377,0,35.089,19.584,35.089,43.738
			c0,18.178-8.896,33.756-21.555,40.361l1.19,6.349c10.019,11.658,49.802,12.418,49.802,58.488H150.453z" fill="white" />
            </svg> */}
            <img src="gs://unpopular-opinion.appspot.com/icons/createopinion.png" alt="Profile"></img>
            {/* <Link to='/profile'><div className="profile-img" style={{ backgroundImage: `url(//../../../public/icons/nav/profile.png)`}}/></Link> */}
            {/* <Link to='/profile' style={{ backgroundImage: `url('./public/icons/nav/profile.png')`}}>sda</Link> */}
            <Link to='/opinions/create'>Create</Link>
          </div>
        );
      case '/profile':
        return (
          <div className="nav">
            <Link to='/opinions'>Opinions</Link>
            <Link to='/opinions/create'>Create</Link>
            {/* <Link to='/statistics'>Stats</Link> */}
            <p className="nav-logout" onClick={() => this.handlelOnClick(this.props.logout)} >Logout</p>
          </div>
        );
      default:
        return (
          <div className="nav">
            <Link to='/opinions'>Opinions</Link>
            <Link to='/opinions/create'>Create</Link>
            <Link to='/profile'>Profile</Link>
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
            <div className="nav-home">
              <Link to='/login'>Login</Link>
              <Link to='/signup'>Signup</Link>
            </div>
        } 
      </>
    );
  }
}

export default withAuth(Navbar);
