import React, { Component } from "react";
import axios from "axios";

class CreateOpinion extends Component {
  state = {
    category: "",
    author: "",
    question: "",
    // response: {
    //   x: "",
    //   y: "",
    // }
  };

  createOpinion( category, author, question ) {
    axios.post("http://localhost:5000/opinions/", { category, author, question })
      // .then((data) => data)
      // .catch((error)=> {
      //   console.log('Me cago en la mierda, otro error')
      // })
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const { category, author, question } = this.state;
    this.createOpinion({ category, author, question });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { author, question } = this.state;
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>author:</label>
          <input
            type="text"
            name="author"
            value={author}
            onChange={this.handleChange}
          />
          <label>question:</label>
          <input
            type="question"
            name="question"
            value={question}
            onChange={this.handleChange}
          />
          <input type="submit" value="Create opinion" />
        </form>
      </div>
    );
  }
}

export default CreateOpinion;
