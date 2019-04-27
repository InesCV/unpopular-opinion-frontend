import React, { Component } from "react";
import axios from "axios";

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
    axios.get("http://localhost:5000/opinions/")
      .then((opinions) => {
        this.setState({
          isLoading: false,
          opinions: [...opinions.data]
        }) 
      })
      .catch((error)=> {
        console.log('Me cago en la mierda, otro error')
      })
  }


  render() {
    const { isLoading, opinions } = this.state
    return (
      <>
        { isLoading ? 'Loading...' : (
          opinions.map((opinion, index) => {
            return (
              <div key={index} style={tryout}>
                <p>{opinion.author}</p>
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
