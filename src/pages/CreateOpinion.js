import React, { Component } from "react";
import axios from "axios";

class CreateOpinion extends Component {
  state = {
    isLoading: true,
    categories: [],
    category: "",
    question: "",
    responseX: "",
    responseY: "",
    // response: {
    //   x: "",
    //   y: "",
    // }
  };

  componentDidMount() {
    axios.get("http://localhost:5000/opinions/categories")
      .then((categories) => {
        console.log(categories.data)
        this.setState({
          isLoading: false,
          categories: [...categories.data],
        }) 
      })
      .catch((error)=> {
        console.log('Ha fallado el categories')
      })
  }

  createOpinion( category, question, responseX, responseY ) {
    axios.post("http://localhost:5000/opinions", 
      { category, 
        question, 
        response: {
          x: responseX,
          y: responseY,
        } 
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error)=> {
        console.log('Me cago en la mierda, no puedo crear la puta opinion')
        console.log(error)
      })
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const { category, question, responseX, responseY } = this.state;
    console.log( category, question, responseX, responseY);
    this.createOpinion( category, question, responseX, responseY );
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { isLoading, categories, category, question, responseX, responseY } = this.state;
    return (
      <div>
        { isLoading ? 'Loading...' : (
        <form onSubmit={this.handleFormSubmit}>
          <label>Category:</label>
          <select
            name="category"
            value={category}
            onChange={this.handleChange}
          >
            <option value="select">- Select your category -</option>
            { categories.map((category, index) => {
              return <option key={index} value={category}>{category}</option>
            })}
          </select>
          <br></br>
          <label>Question:</label>
          <input
            type="text"
            maxLength="140"
            name="question"
            value={question}
            onChange={this.handleChange}
          />
          <br></br>
          <label>First response:</label>
          <input
            type="text"
            maxLength="15"
            name="responseX"
            value={responseX}
            onChange={this.handleChange}
          />
          <br></br>
          <label>Second response:</label>
          <input
            type="text"
            maxLength="15"

            name="responseY"
            value={responseY}
            onChange={this.handleChange}
          />
          <br></br>
          <input type="submit" value="Create opinion" />
        </form>) }
      </div>
    );
  }
}

export default CreateOpinion;
