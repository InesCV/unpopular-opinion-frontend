import React, { Component } from "react";

import { withAuth } from "../lib/AuthProvider";
import statsService from "../lib/statistics-service";
// import {types} from "../lib/spiner-types";
import Navbar from "../components/Navbar";
// import Spinner from "../components/Spinner";

class Statistics extends Component {
  state = {
    stats: {},
  }

  handleClick = (e) => {
    // const query = {
    //   category: 'Sex',
    //   user: 'Jdej',
    //   opinion: 'Opinion',
    // };
    const query = {opinion: '5cc60f3fc17169fbfedd3ea5'};
    statsService.query(query)
      .then((stats) => {
        this.setState({
          stats
        });
      })
      .catch((error)=> {
        console.log("Couldn't get the stats");
        console.log(error);
      });
  }

  render() {
    const { stats } = this.state;
    return (
      <>
        <Navbar/>
        <button onClick={ this.handleClick } >Consultar</button>
        <ul>
          {console.log(stats)}
        </ul>
      </>
    );
  }
}

export default withAuth(Statistics);
