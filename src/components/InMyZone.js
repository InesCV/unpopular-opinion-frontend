import React, {Component} from 'react';
import { inject, observer } from 'mobx-react';
import { toast } from 'react-toastify';

import {statTypes} from "../constants/constants";
import {errorTypes} from "../constants/constants";
import {spinnerTypes} from "../constants/constants";

import { withAuth } from '../lib/AuthProvider';
import statsService from '../lib/statistics-service';

import Spinner from "../components/Spinner";
import InMyZoneUopers from "../components/InMyZoneUopers";

@inject('appStore')
@observer
class InMyZone extends Component {
  state = {
    isLoading: true,
    nearUopers: null,
    notEnoughData: true,
  }
  
  componentDidMount() {
    this.props.appStore.inMyZone(this.props.user._id);
  }

  render() {
    return (
      <>
        {this.props.appStore.nearUopers === null
          ? <Spinner type={spinnerTypes.SPIN} color={"black"} />
          : 
            <div className="container nav-after d-flex flex-wrap">
              <h2 className="profile-title pt-3 terciary-color mb-2">Uopers nearby you</h2>
              {this.props.appStore.nearUopers.toJS().map((uoper, index)=> {
                if (uoper.username !== this.props.user.username){
                }
                return <InMyZoneUopers key={index} user={uoper} />
              })}
            </div>              
        } 
      </>
    );
  }
}

export default withAuth(InMyZone);