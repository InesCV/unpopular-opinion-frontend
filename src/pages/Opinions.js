import React, { Component } from "react";

import opinionService from "../lib/opinion-service";
import Card from '../components/Card';
import Navbar from "../components/Navbar";
import Spinner from "../components/Spinner";
import {types} from "../lib/spiner-types";

class Opinions extends Component {
  state = {
    isLoading: true,
    opinions: []
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

  onRespond = (index) => {
    this.state.opinions.splice(index, 1);
    this.setState({
        opinions: this.state.opinions,
      })
  }

  render() {
    const { isLoading, opinions } = this.state;
    return (
      <>
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
