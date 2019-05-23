import React, { Component } from "react";
import { inject, observer } from 'mobx-react';
import {Link} from 'react-router-dom';
import { toast } from 'react-toastify';
import { CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../sass/stylesheets/styles.scss';

import { imzMessages } from "../constants/constants";
import { withAuth } from "../lib/AuthProvider";
import statsService from '../lib/statistics-service';

import {statTypes, errorTypes} from "../constants/constants";

@inject('appStore')
@observer
class InMyZoneUser extends Component {
  state = {
    isLoading: true,
    notEnoughData: false,
    data: undefined,
    advice: '',
  }

  componentDidMount(){
    statsService.query({
      type: statTypes.IN_MY_ZONE_RATE,
      nearUopers: this.props.appStore.nearUopers.toJS(),
      // nearUopers: this.props.nearUopers,
    })
    .then(data => {
      console.log(data);
      
      if (data.stats === null) {
        this.setState({
          notEnoughData: true,
          isLoading: false,
        });
      } else {
        let advice;
        if (this.props.appStore.nearUopers.toJS().length === 1) { // If the user is the only UOPER in the zone
          advice = imzMessages.rnobody;
          this.setState({
            data,
            isLoading: false,
            notEnoughData: true,
            advice,
          });
        } else {
          if(data.stats.avg < 10){
            advice = imzMessages.r10;
          } else if (data.stats.avg < 30) {
            advice = imzMessages.r30;
          } else if (data.stats.avg < 60) {
            advice = imzMessages.r60;
          } else if (data.stats.avg < 90){
            advice = imzMessages.r90;
          } else {
            advice = imzMessages.r100;
          }
          this.setState({
            data,
            isLoading: false,
            notEnoughData: false,
            advice,
          });
        }
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
          <div className="cnt-pos">
            {/* <div className="profile-user-card bg-radar"> */}
            <div className="profile-user-card">
              <div className="cnt-pos flex-column">
                <p className="profile-scores-text">Well {this.props.user.username}, let's see how safe this area is for you...</p>
                <div className="circular-prediv mt-2 cnt-pos profile-opinion-graph-big mb-2">
                  <CircularProgressbar value={50} text={`loading`} className="cnt-pos circular-secondary" />
                </div>
              </div>
            </div>
          </div>
          : 
          <>
            <div className="cnt-pos">
              <div className="profile-user-card">
                { this.state.notEnoughData 
                  ? <div className="cnt-pos flex-column">
                      <p className="profile-scores-text">Sorry, we have not found any UOPER near you.</p>
                      <div className="circular-prediv mt-2 cnt-pos profile-opinion-graph-big mb-2 mt-2">
                        <CircularProgressbar value={50} text={'no data'} className="cnt-pos circular-red" /> 
                      </div>
                      <p className="profile-scores-text">{this.state.advice}</p>
                    </div>
                  : <div className="cnt-pos flex-column">
                      <p className="profile-scores-text">This is your acceptance in this area, use it with wisdom...</p>
                      <div className="circular-prediv mt-2 cnt-pos profile-opinion-graph-big mb-2 mt-2">
                        <CircularProgressbar value={this.state.data.stats.avg} text={`${this.state.data.stats.avg}%`} className="cnt-pos circular-secondary" />
                      </div>
                      <p className="profile-scores-text">{this.state.advice}</p>
                    </div>
                } 
                {/* <button className="btn btn-score mt-4" onClick={this.statPerCategory}>Analyze score</button> */}
              </div>
            </div>
          </>
        }
      </>
    );
  }
}

export default withAuth(InMyZoneUser);
