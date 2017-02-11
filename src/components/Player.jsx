import React, { Component } from 'react';
import '../styles/Player.css';

class Player extends Component {
  render() {
    return (
      <div className="full-height">
        <div className="player-actions">

        </div>
        <div className="player-name">
          player {this.props.p_num}
        </div>
      </div>
    );
  }
}

export default Player;
