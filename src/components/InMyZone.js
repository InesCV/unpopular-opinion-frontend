import React, {Component} from 'react';
import { inject } from 'mobx-react';

import {statTypes} from "../constants/constants";
import {spinnerTypes} from "../constants/constants";

import { withAuth } from '../lib/AuthProvider';

import Spinner from "../components/Spinner";
import MatchRate from "../components/MatchRate";

@inject('appStore')
class InMyZone extends Component {
  state = {
    isLoading: false,
    nearUopers: [],
    notEnoughData: true,
  }
  
  componentDidMount() {
    this.props.appStore.inMyZone(this.props.user._id);
    // for (const user of this.props.appStore.nearUopers) {
    //   if(user._id !== this.props.user._id){
    //     statsService.query({
    //       type: statTypes.USER_RATE,
    //       user: user._id,
    //     })
    //     .then(data => {
    //       if (!data){
    //         this.setState({
    //           isLoading: false,
    //         }) 
    //       } else if (!data.stats) {
    //         this.setState({
    //           isLoading: false,
    //         }) 
    //         setResponded(false);
    //       } else {
    //         console.log(this.state.nearUopers);
    //         this.setState({
    //           nearUopers: [... {nearUoper: user, stat: data.stats.avg}],
    //         });
    //         setIsLoading (false);
    //       }
    //     }) 
    //     .catch((error)=> {
    //       console.log(error);
    //       toast.error(`Sorry. ${errorTypes.E500S}`, {
    //         position: toast.POSITION.BOTTOM_RIGHT
    //       });
    //     });
    //   }
    // }
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.isLoggedin !== this.state.isLoggedin){
  //     this.props.appStore.me(this.state.user);
  //   }
  // }

  setNotEnoughData = () => {
    this.setState({
      notEnoughData: !notEnoughData,
    });
  }

  render() {
    const {user, nearUopers, notEnoughData} = this.props;
    return (
      <>
        {this.state.isLoading 
          ? <Spinner type={spinnerTypes.SPIN} color={"black"} />
          : <>
              {hola
                // nearUopers.forEach(uoper => {
                //   <div className="container nav-after d-flex flex-wrap">
                //     <div className="cnt-pos">
                //       <MatchRate userId={uoper._id} username={user.username} notEnoughData={notEnoughData} setNotEnoughData={setNotEnoughData} />
                //     </div>
                //     <div>
                //       { notEnoughData && <p className="log-comment">We don't have enough answers from both users to create an <span>accurate affinity rate between you and {uoper.username}</span></p>}
                //     </div>
                //   </div>   
                // })
              }
            </>
        } 
      </>
    );
  }
}

export default withAuth(InMyZone);