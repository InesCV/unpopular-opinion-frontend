import React, { useState, useEffect } from "react";
import { toast } from 'react-toastify';
import { CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../sass/stylesheets/styles.scss';

import { imzMessages } from "../constants/constants";
import { withAuth } from "../lib/AuthProvider";
import statsService from '../lib/statistics-service';

import {statTypes, errorTypes} from "../constants/constants";


const InMyZoneUser = ({uopers, user}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [notEnoughData, setNotEnoughData] = useState(false);
  const [data, setData] = useState(undefined);
  const [advice, setAdvice] = useState('');

  useEffect(() => {
    statsService.query({
      type: statTypes.IN_MY_ZONE_RATE,
      nearUopers: uopers,
    })
    .then(data => {
      if (data.stats === null) {
        setNotEnoughData(true);
        setIsLoading(false);
      } else {
        if (uopers.length === 1) { // If the user is the only UOPER in the zone
          setAdvice(imzMessages.rnobody);
          setData(data);
          setNotEnoughData(true);
          setIsLoading(false);
        } else {
          if(data.stats.avg < 30){
            setAdvice(imzMessages.r30);
          } else if (data.stats.avg < 50) {
            setAdvice(imzMessages.r50);
          } else if (data.stats.avg < 70) {
            setAdvice(imzMessages.r70);
          } else if (data.stats.avg < 90){
            setAdvice(imzMessages.r90);
          } else {
            setAdvice(imzMessages.r100);
          }
          setData(data);
          setNotEnoughData(false);
          setIsLoading(false);
        }
      }
    }) 
    .catch((error)=> {
      toast.error(`Sorry. ${errorTypes.E500S}`, {
        position: toast.POSITION.BOTTOM_RIGHT
      });
    });
  }, [uopers]);

  return (
    <>
      { isLoading ?
        <div className="cnt-pos">
          {/* <div className="profile-user-card bg-radar"> */}
          <div className="profile-user-card">
            <div className="cnt-pos flex-column">
              <p className="profile-scores-text">Well {user.username}, let's see how safe this zone is for you...</p>
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
              { notEnoughData 
                ? <div className="cnt-pos flex-column">
                    <p className="profile-scores-text">Sorry, we have not found any UOPER near you.</p>
                    <div className="circular-prediv mt-2 cnt-pos profile-opinion-graph-big mb-2 mt-2">
                      <CircularProgressbar value={50} text={'no data'} className="cnt-pos circular-red" /> 
                    </div>
                    <p className="profile-scores-text">{advice}</p>
                  </div>
                : <div className="cnt-pos flex-column">
                    <p className="profile-scores-text">This is your acceptance in this zone, use it with wisdom...</p>
                    <div className="circular-prediv mt-2 cnt-pos profile-opinion-graph-big mb-2 mt-2">
                      <CircularProgressbar value={data.stats.avg} text={`${data.stats.avg}%`} className="cnt-pos circular-secondary" />
                    </div>
                    <p className="profile-scores-text">{advice}</p>
                  </div>
              }
            </div>
          </div>
        </>
      }
    </>
  );
}

export default withAuth(InMyZoneUser);
