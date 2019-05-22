import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from "../lib/AuthProvider";


import UserUOPs from "../components/UserUOPs";
import UserInfoCard from "../components/UserInfoCard";
import CategoryRate from "../components/CategoryRate";

import {statTypes} from "../constants/constants";
import statsService from '../lib/statistics-service';


const UserHome = ({ user, toggleIsEditing, logout, history }) => {
  const [hasStat, setHasStat] = useState(false);

  function handlelOnClick(logout) {
    logout();
    history.push(`/`);
  }

  function toggleHasStat () {
    setHasStat(!hasStat);
  }

  return (
    <div className="container nav-after d-flex flex-wrap">
      <div className="your-profile mb-2">
        <div className="profile-title mt-2 mb-2">
          <h2 className="tertiary-color">Your profile</h2> 
        </div>
        <UserInfoCard user={user} toggleIsEditing={toggleIsEditing} toggleHasStat={toggleHasStat}/>
        {/* <button className="btn btn-score mt-4"  onClick={toggleHasStat}>Analyze score</button> */}
      </div>
      { hasStat ? 
        <div className="your-opinions">
          <h2 className="profile-title mt-2 tertiary-color">Your category statistics</h2> 
          <CategoryRate user={user} toggleHasStat={toggleHasStat} />
        </div> 
        : 
        <div className="your-opinions">
          <h2 className="profile-title mt-2 tertiary-color">Your opinions</h2> 
          { user.opinions.length > 0 ? 
              <div className="cnt-pos flex-column">
                { user.opinions.map((opinion, index) => <UserUOPs key={index} op={opinion}/>) }
                <Link className="btn btn-primary" to='/opinions/create'>Create more opinions</Link>
              </div> 
            : 
              <div className="cnt-pos flex-column">
                <div className="profile-opinion-card mt-2 mb-5">
                  <p className="mb-4">Create opinions of your own to get <span>answers</span> from the community</p>
                  <Link className="btn btn-primary" to='/opinions/create'>Create Opinion</Link>
                </div>
              </div>
          }
          <div className="d-flex justify-content-center">
            <p className="mt-2 mb-5 btn btn-tertiary" onClick={() => handlelOnClick(logout)}>Logout</p>
          </div>
        </div>
      }
    </div>
  );
}

export default withAuth(UserHome);