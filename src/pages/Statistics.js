import React, { Component } from "react";
import { inject } from 'mobx-react';

import { withAuth } from "../lib/AuthProvider";
import statsService from "../lib/statistics-service";
import Navbar from "../components/Navbar";

@inject('appStore')
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

    const ines = '5ce1b07e5afe790017613be4';
    const jorge = '5ce1b1475afe790017613be7';
    const paco = '5ce1b5966780eb1ce66d9afa';

    const query = {
      type: 'inMyZoneCategory',
      // opinion: suicidas,
      // category: 'Philosoraptor',
      nearUopers: ['5ce1b07e5afe790017613be4', '5ce1b5966780eb1ce66d9afa', '5ce1b1475afe790017613be7'],
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

  inMyZone = (e) => {
    this.props.appStore.inMyZone();
  }

  render() {
    const { stats } = this.state;
    return (
      <>
        <Navbar {...this.props}/>
        <button className="btn btn-primary mt-4 ml-4" style={{marginTop: '100px'}} onClick={ this.handleClick } >Consultar</button>
        {console.log(stats)}
      </>
    );
  }
}

export default withAuth(Statistics);