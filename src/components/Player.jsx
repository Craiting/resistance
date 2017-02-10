import React, { Component } from 'react';
import '../styles/Player.css';

class Player extends Component {
  render() {
    return (
      <div>
        player {this.props.p_num}
      </div>
    );
  }
}

export default Player;
