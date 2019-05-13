import React, { Component } from "react";

import {statTypes} from "../constants/constants";
import {spinnerTypes} from "../constants/constants";

import opinionService from "../lib/opinion-service";
import statsService from "../lib/statistics-service";

import Deck from '../components/Deck';
import Navbar from "../components/Navbar";
import Spinner from "../components/Spinner";
import OpinionRate from "../components/OpinionRate";

class Opinions extends Component {
  state = {
    isLoading: true,
    opinions: [],
    responded: false,
    lastStat: null,
  }

  componentDidMount() {
    opinionService.notResponded()
      .then((ops) => {
        this.setState({
          isLoading: false,
          opinions: [...ops],
        }) 
      })
      .catch((error)=> {
        console.log("Couldn't get the opinions");
        console.log(error);
      });
  }

  onRespond = async (index, res) => {
    const { opinions } = this.state;
    // Register the response to the opinion
    await opinionService.response({opinion: opinions[index]._id, response: res});
    // Consult the statistics of the opinion the user just responded to
    const stat = await statsService.query({type: statTypes.OPINION_RATE, opinion: opinions[index]._id});
    console.log(stat);
    this.state.opinions.splice(index, 1);
    this.setState({
        opinions: this.state.opinions,
        responded: true,
        lastStat: stat,
      })
  }

  skipRate = (state) => {
    this.setState({
      responded: false,
    })
  }

  render() {
    const { isLoading, opinions, responded, lastStat } = this.state;
    return (
      <>
        { responded ? <OpinionRate skipRate={this.skipRate} stat={lastStat} /> : <></> }
        <Navbar {...this.props}/>
        { isLoading ? <Spinner type={spinnerTypes.SPIN} color={"black"} /> : <Deck cards={opinions} respond={this.onRespond} /> }
      </>
    );
  }
}

export default Opinions
