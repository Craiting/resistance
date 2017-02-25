import React, { Component } from 'react';
import '../styles/Player.css';
import rejectImg from '../images/reject.png';
import approveImg from '../images/approve.png';

class Player extends Component {
  constructor(){
    super()
    this.state = {
      voteStatus: "approve",
      isCommander: false,
      isAgent: true
    }
  }
  renderReject() {
    return (
      <div className="reject-card">
        <img src={rejectImg} className="reject-img" />
        <h2>Reject</h2>
      </div>
    )
  }
  renderApprove() {
    return (
      <div className="approve-card">
        <img src={approveImg} className="reject-img" />
        <h2>Approve</h2>
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
