import React, { useState } from 'react';

import FileUpload from './FileUpload';

export default ({sendOpinion}) => {
  const [photo, setPhoto] = useState("");
  const [question, setQuestion] = useState("");
  const [responseX, setResponseX] = useState("Sí");
  const [responseY, setResponseY] = useState("No");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    sendOpinion({ photo, question, responseX, responseY });
  };

  return (
    <>
      {/* <FileUpload type={'opinions'} updateFunction={setPhoto} /> */}
      <form className="container nav-after" onSubmit={handleFormSubmit}>
        <div className="mt-3 cnt-pos flex-column">
          <label className="center">Question: <p className="opinion-comment">&#9888; There is a limit of 140 characters per question</p></label>
          <textarea className="profile-edit-box opinion-create-question"
            type="text"
            maxLength="140"
            name="question"
            value={question}
            onChange={e => setQuestion(e.target.value)}
          />
          <label className="center">First response: <p className="opinion-comment">&#9888; There is a limit of 15 characters per response</p></label>
          <input className="profile-edit-box opinion-create-response "
            type="text"
            maxLength="15"
            name="responseX"
            value={responseX}
            onChange={e => setResponseX(e.target.value)}
          />
          <label className="center">Second response: <p className="opinion-comment">&#9888; There is a limit of 15 characters per response</p></label>
          <input className="profile-edit-box opinion-create-response "
            type="text"
            maxLength="15"
            name="responseY"
            value={responseY}
            onChange={e => setResponseY(e.target.value)}
          />
          <div className="cnt-pos mt-4">
            <input className="btn btn-primary" type="submit" value="Create opinion" />
          </div>
        </div>
      </form>
    </>
  );
}