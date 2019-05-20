import React, { Component } from "react";
import {Link} from 'react-router-dom';
import { toast } from 'react-toastify';
import { CircularProgressbar, CircularProgressbarWithChildren} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../sass/stylesheets/styles.scss';

import { withAuth } from "../lib/AuthProvider";
import statsService from '../lib/statistics-service';

import {statTypes, errorTypes} from "../constants/constants";


class InMyZoneUopers extends Component {
  state = {
    isLoading: true,
    notEnoughData: false,
    match: undefined,
  }

  componentDidMount(){
    statsService.query({
      type: statTypes.MATCH_RATE,
      userMatch: this.props.user._id,
    })
    .then(data => {
      if (data.stats === null) {
        this.setState({
          match: 50,
          notEnoughData: true,
          isLoading: false,
        });
      } else {
        this.setState({
          match: data.avg,
          isLoading: false,
          notEnoughData: false,
        });
      }
    }) 
    .catch((error)=> {
      toast.error(`Sorry. ${errorTypes.E500S}`, {
        position: toast.POSITION.BOTTOM_RIGHT
      });
    });
  }

  avatarStyle = {
    backgroundImage: `url(${this.props.user.avatar})`,
    backgroundSize: 'cover',
    width: '70%',
    height: '70%',
  };

  render() {
    const { user } = this.props;

    return (
      <>
        { this.state.isLoading ?
          <div className="cnt-pos flex-column">
            <div className="circular-prediv mt-2">
              <CircularProgressbar value={50} text={`loading`} className="cnt-pos circular-secondary" />
            </div>
            <p className="profile-scores-text">Your Affinity with {user.username}</p>
          </div>
          : 
          <>
            { this.state.notEnoughData ?
              <div className="cnt-pos flex-column">
                <div className="circular-prediv mt-2">
                  <CircularProgressbar value={50} text={`no data`} className="cnt-pos circular-red" />
                </div>
                <p className="profile-scores-text">Can't create your affinity with {user.username}</p>
              </div>
              :
              <div className="cnt-pos flex-column" style={{marginBottom: "2rem"}}>
                <div className="circular-prediv mt-2" >
                  <CircularProgressbarWithChildren value={this.state.match} className="cnt-pos circular-secondary"> 
                    <Link className="card-author-link" to={{
                      pathname: '/user',
                      state: {
                        id: user._id,
                      }
                    }}> 
                      <div className="profile-imz-img" style={{ backgroundImage: `url(${user.avatar})`}}/>  
                    </Link>
                  </CircularProgressbarWithChildren>
                </div>
                <p className="profile-scores-text">{this.state.match}% affinity with 
                <Link className="tertiary-color" to={{
                    pathname: '/user',
                    state: {
                      id: user._id,
                    }
                  }}> {user.username}
                </Link></p>
              </div>      
            }
          </>
        }
      </>
    );
  }
}

export default withAuth(InMyZoneUopers);
