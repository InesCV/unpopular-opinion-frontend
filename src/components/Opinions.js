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
    console.log(this.state.opinions);
    return (
      <>
        { this.state.isLoading ? 'Loading...' : this.state.opinions[0].author }
        <Link to='/opinions/create'>Create Opinion</Link>
      </>
    );
  }
}

export default Opinions
