import React, { Component } from "react";

import opinionService from "../lib/opinion-service";
import {types} from "../lib/spiner-types";
import Navbar from "../components/Navbar";
import Spinner from "../components/Spinner";

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
    opinionService.categories()
      .then(cat => {
        this.setState({
          isLoading: false,
          categories: [...cat],
        })
      }) 
      .catch((error)=> {
        console.log('Categories Not Found from the Schema')
        console.log(error);
      });
  }

  createOpinion( category, question, responseX, responseY ) {
    const newOpinion = { 
      category, 
      question, 
      response: {
        x: responseX,
        y: responseY,
      } 
    };
    opinionService.create(newOpinion)
      .then((createdOpinon) => console.log(createdOpinon))
      .catch((error) => {
        console.log("Oh shit! I can't create an opinion")
        console.log(error)
      })
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const { category, question, responseX, responseY } = this.state;
    category ? this.createOpinion( category, question, responseX, responseY ) : console.log('Falta la categoría');
    this.setState({
      category: "",
      question: "",
      responseX: "",
      responseY: "",
    })
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { isLoading, categories, category, question, responseX, responseY } = this.state;
    return (
      <div>
        { isLoading ? (
          <>
            <Navbar/>
            <Spinner type={types.Bubbles} color={"blue"} />
          </>
          ) : (
          <>
            <Navbar/>
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
            </form>
          </>
        )}
      </div>
    );
  }
}

export default CreateOpinion;
