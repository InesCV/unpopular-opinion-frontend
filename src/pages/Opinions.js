import React, { Component } from "react";
import { toast } from 'react-toastify';

import {statTypes} from "../constants/constants";
import {spinnerTypes} from "../constants/constants";

import opinionService from "../lib/opinion-service";
import statsService from "../lib/statistics-service";

import Deck from '../components/Deck';
import Navbar from "../components/Navbar";
import Spinner from "../components/Spinner";
import OpinionRate from "../components/OpinionRate";
import OpinionBar from "../components/OpinionBar";
import InMyZone from "../components/InMyZone";

class Opinions extends Component {
  state = {
    isLoading: true,
    opinions: [],
    responded: false,
    lastStat: null,
    imzSwitch: false,
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

  skipRate = (state) => {
    this.setState({
      responded: false,
    })
  }

  inMyZone = () => {
    this.setState({
      imzSwitch: !this.state.imzSwitch,
    });
  }

  render() {
    const { isLoading, opinions, responded, lastStat, imzSwitch } = this.state;
    return (
      <div className="deck-general">
        { responded ? <OpinionRate skipRate={this.skipRate} stat={lastStat} /> : <></> }
        <Navbar {...this.props} imzToggle={this.inMyZone}/>
        {
          isLoading
          ? <Spinner type={spinnerTypes.SPIN} color={"black"} />
          : (
            imzSwitch
            ? <InMyZone />
            : <>
                <Deck cards={opinions} respond={this.onRespond} />
                <OpinionBar skipRate={this.skipRate} cards={opinions} respond={this.onRespond} />
              </>
          )
        }
      </div>
    );
  }
}

export default Opinions
