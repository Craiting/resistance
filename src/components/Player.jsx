import React, { Component } from 'react';
import '../styles/Player.css';

class Player extends Component {
  constructor(){
    super()
    this.state = {
      voteStatus: "reject",
      isCommander: false,
      isAgent: true
    }
  }
  renderReject() {
    return (
      <div className="rejectCard">
        <span>Reject</span>
      </div>
    )
  }
  renderApprove() {
    return (
      <div className="approveCard">
        Approve
      </div>
    )
  }
  renderVote() {
    return (
      <div className="vote-card">
        { this.state.voteStatus == 'reject' ?
          this.renderReject() :
          this.renderApprove() }
      </div>
    )
  }
  render() {
    return (
      <div className="full-height">
        <div className="player-actions">
          { this.props.showVotes ? this.renderVote() : null}
        </div>
        <div className="player-name">
          {this.props.name} {this.props.p_num}
        </div>
      </div>
    );
  }
}

export default Player;
