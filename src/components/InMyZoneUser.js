import React, { Component } from "react";
import { inject, observer } from 'mobx-react';
import {Link} from 'react-router-dom';
import { toast } from 'react-toastify';
import { CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../sass/stylesheets/styles.scss';

import { withAuth } from "../lib/AuthProvider";
import statsService from '../lib/statistics-service';

import {statTypes, errorTypes} from "../constants/constants";

@inject('appStore')
@observer
class InMyZoneUopers extends Component {
  state = {
    isLoading: true,
    notEnoughData: false,
    data: undefined,
  }

  componentDidMount(){
    statsService.query({
      type: statTypes.IN_MY_ZONE_RATE,
      nearUopers: this.props.appStore.nearUopers.toJS(),
    })
    .then(data => {
      if (data.stats === null) {
        this.setState({
          notEnoughData: true,
          isLoading: false,
        });
      } else {
        this.setState({
          data,
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

  statPerCategory = () => {

  }

  render() {
    return (
      <>
        { this.state.isLoading ?
          <div className="cnt-pos flex-column">
            <div className="circular-prediv mt-2">
              <CircularProgressbar value={50} text={`loading`} className="cnt-pos circular-secondary" />
            </div>
            <p className="profile-scores-text">Well {this.props.user.username}, let's see how safe is this area...</p>
          </div>
          : 
          <>
            <div className="cnt-pos">
              <div className="profile-user-card ">
                <div className="cnt-pos flex-column">
                  <div className="profile-opinion-graph">
                    { this.state.notEnoughData 
                      ? <>
                          <CircularProgressbar value={50} text={'no data'} className="cnt-pos circular-red" /> 
                          <p className="profile-scores-text">Sorry, we can't help you, this time you are alone...</p>
                        </>
                      : <>
                          <CircularProgressbar value={this.state.data.stats.avg} text={`${this.state.data.stats.avg}%`} className="cnt-pos circular-uop" />
                          <p className="profile-scores-text">This is your acceptance in this area, use it with wisdom...</p>
                        </>
                    } 
                  </div>
                  <button className="btn btn-score mt-4" onClick={this.statPerCategory}>Analyze score</button>
                </div>
              </div>
            </div>
          </>
        }
      </>
    );
  }
}

export default withAuth(InMyZoneUopers);
