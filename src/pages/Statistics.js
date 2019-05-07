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

    const dinosaurios = '5cc60f3fc17169fbfedd3ea5';
    const suicidas = '5ccbff34a54250552074284d';
    const messi = '5ccbff62a54250552074284e';
    const diciembre = '5ccbff7da54250552074284f';
    const voxx = '5ccc0027a542505520742850';
    const dogs = '5ccc004ba542505520742851';
    const piña = '5ccc0075a542505520742852';
    const ejercicios = '5ccdb11e7427b04330d4199e';
    const dios = '5ccdcdedb42ef4551aa21cbb';

    const ines = '5cbf65dd62fad57dada0ec51';
    const jorge = '5cc4be8ecffd381f71d9761d';
    const paco = '5ccdb0d17427b04330d41997';

    const query = {
      type: 'user',
      // opinion: suicidas,
      // category: 'Philosoraptor',
      // user: ines,
    };


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
        <Navbar {...this.props}/>
        <button className="btn btn-primary mt-4 ml-4" onClick={ this.handleClick } >Consultar</button>
        {console.log(stats)}
      </>
    );
  }
}

export default withAuth(Statistics);
