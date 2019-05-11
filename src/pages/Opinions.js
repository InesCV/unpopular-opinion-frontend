import React, { Component } from "react";

import opinionService from "../lib/opinion-service";
import {types} from "../lib/spiner-types";
import statsService from "../lib/statistics-service";
import {types as statTypes} from "../lib/stats-types";
import Card from '../components/Card';
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
    const stat = await statsService.query({type: statTypes.opinionRate, opinion: opinions[index]._id});
    console.log(stat);
    this.state.opinions.splice(index, 1);
    this.setState({
        opinions: this.state.opinions,
        responded: true,
        lastStat: stat,
      })
  }

  skip = (state) => {
    this.setState({
      responded: false,
    })
  }

  render() {
    const { isLoading, opinions, responded, lastStat } = this.state;
    return (
      <>
        { responded ? <OpinionRate skip={this.skip} stat={lastStat} /> : <></> }
        <Navbar {...this.props}/>
        { isLoading ? 
        (<>
          <Spinner type={types.Spin} color={"black"} />
        </>) : 
        (<>
          {
            opinions.map((opinion, index) => 
              <Card key={index} index={index} op={opinion} respond={this.onRespond} />
            )
          }
        </>)
        }
      </>
    );
  }
}

export default Opinions
