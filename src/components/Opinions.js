import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

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
    console.log(this.state.opinions);
    return (
      <>
        { isLoading ? 'Loading...' : (
          opinions.map((opinion, index) => {
            return (
              <div key={index}>
                <p>{opinion.author}</p>
                <p>{opinion.question}</p>
                <p>{opinion.response.x}</p>
                <p>{opinion.response.y}</p>
              </div>
            )
          })
          )
        }
        <Link to='/opinions/create'>Create Opinion</Link>
      </>
    );
  }
}

export default Opinions
