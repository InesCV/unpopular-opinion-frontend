import React, { Component } from "react";
import { toast } from 'react-toastify';

import {statTypes} from "../constants/constants";

import opinionService from "../lib/opinion-service";
import statsService from "../lib/statistics-service";

import Deck from '../components/Deck';
import Navbar from "../components/Navbar";
import SpinnerCentral from "../components/SpinnerCentral";
import OpinionRate from "../components/OpinionRate";
import OpinionBar from "../components/OpinionBar";
import InMyZone from "./InMyZone";

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
        toast.error("Couldn't get the opinions from the API", {
          position: toast.POSITION.BOTTOM_RIGHT
        });
      });
  }

  onRespond = async (index, res) => {
    const { opinions } = this.state;
    // Register the response to the opinion
    await opinionService.response({opinion: opinions[index]._id, response: res});
    // Consult the statistics of the opinion the user just responded to
    const stat = await statsService.query({type: statTypes.OPINION_RATE, opinion: opinions[index]._id});
    this.state.opinions.splice(index, 1);
    this.setState({
        opinions: this.state.opinions,
        responded: true,
        lastStat: stat,
      })
  }

  skipOpinion = (index) => {
    this.state.opinions.splice(index, 1);
    this.setState({
        opinions: this.state.opinions,
        responded: false,
      })
  }

  render() {
    const { isLoading, opinions, responded, lastStat } = this.state;
    return (
      <div className="deck-general">
        { responded ? <OpinionRate skipRate={this.skipRate} stat={lastStat} /> : <></> }
        <Navbar {...this.props}/>
        {
          isLoading? 
            <SpinnerCentral />
          : 
            <>
              <Deck cards={opinions} respond={this.onRespond} />
              <OpinionBar isResponded={responded} cards={opinions} respond={this.onRespond} skipOpinion={this.skipOpinion} />
            </>
        }
      </div>
    );
  }
}

export default Opinions
