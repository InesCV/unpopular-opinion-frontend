import React from 'react';

export default () => {
  return (
    <form className="container pt-3" onSubmit={this.handleFormSubmit}>
      <label>Question:</label>
      <input className="form-control"
        type="text"
        maxLength="140"
        name="question"
        // value={question}
        // onChange={handleChange}
      />
      <br></br>
      <label>First response:</label>
      <input
        type="text"
        maxLength="15"
        name="responseX"
        // value={responseX}
        // onChange={this.handleChange}
      />
      <br></br>
      <label>Second response:</label>
      <input
        type="text"
        maxLength="15"
        name="responseY"
        // value={responseY}
        // onChange={this.handleChange}
      />
      <br></br>
      <input type="submit" value="Create opinion" />
    </form>
  );
}