import React, { Component } from "react";

import opinionService from "../lib/opinion-service";


const tryout = {
  margin: 20,
  border: "1px solid black",
  padding: 20
};

class Opinions extends Component {
  state = {
    isLoading: true,
    opinions: []
  }

  componentDidMount() {
    opinionService.all()
      .then((ops) => {
        this.setState({
          isLoading: false,
          opinions: [...ops]
        }) 
      })
      .catch((error)=> {
        console.log("Couldn't get the opinions");
        console.log(error);
      });
  }


  // Cambiar el loading por un spinner
  render() {
    const { isLoading, opinions } = this.state
    return (
      <>
        { isLoading ? 'Loading...' : (
          opinions.map((opinion, index) => {
            // TODO 
            return (
              <div key={index} style={tryout}>
                <p>{opinion.author.username}</p>
                <p>{opinion.question}</p>
                <p>{opinion.response.x}</p>
                <p>{opinion.response.y}</p>
              </div>
            )
          })
          )
        }
      </>
    );
  }
}

export default Opinions
