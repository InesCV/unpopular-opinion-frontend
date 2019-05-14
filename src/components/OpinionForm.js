import React, { useState } from 'react';

export default ({sendOpinion}) => {
  const [question, setQuestion] = useState("");
  const [responseX, setResponseX] = useState("");
  const [responseY, setResponseY] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    sendOpinion({ question, responseX, responseY });
  };

  return (
    <form className="container pt-3 nav-after" onSubmit={handleFormSubmit}>
      <label>Question:</label>
      <input className="form-control"
        type="text"
        maxLength="140"
        name="question"
        value={question}
        onChange={e => setQuestion(e.target.value)}
      />
      <br></br>
      <label>First response:</label>
      <input
        type="text"
        maxLength="15"
        name="responseX"
        value={responseX}
        onChange={e => setResponseX(e.target.value)}
      />
      <br></br>
      <label>Second response:</label>
      <input
        type="text"
        maxLength="15"
        name="responseY"
        value={responseY}
        onChange={e => setResponseY(e.target.value)}
      />
      <br></br>
      <input className="btn btn-primary" type="submit" value="Create opinion" />
    </form>
  );
}