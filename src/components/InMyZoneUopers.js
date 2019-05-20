import React, { Component } from "react";

import { withAuth } from "../lib/AuthProvider";

import MatchRate from "../components/MatchRate";

class InMyZoneUopers extends Component {
  state = {
    notEnoughData: true,
  }

  setNotEnoughData = (value) => {
    this.setState({
      notEnoughData: value,
    });
  }

  render() {
    const { user } = this.props;

    return (
      <div className="your-profile mb-2">
        <div className="cnt-pos">
          <div className="profile-user-card cnt-pos flex-column">
            <img src={user.avatar} alt={user.username} className="card-author-img mr-2"/>
            <MatchRate userId={user._id} username={user.username} notEnoughData={this.state.notEnoughData} setNotEnoughData={this.state.setNotEnoughData} />
            <h2 className="profile-name pt-3">{user.username}</h2>
            { user.description && <p className="profile-description">{user.description}</p> }
            <div>
              { this.state.notEnoughData && <p className="log-comment">We don't have enough answers from both users to create an <span>accurate affinity rate between you and {user.username}</span></p>}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withAuth(InMyZoneUopers);
