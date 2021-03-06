import React, { Component } from 'react';
import '../styles/Game.css';
import Board from './Board.jsx';
import VoteTrack from './VoteTrack.jsx';
import Players from './Players.jsx';

class Game extends Component {
  render() {
    return (
      <div className="game-container">
        <div className="upper-content">
          <div className="vote-track">
            <VoteTrack />
          </div>
          <div className="game-main-board">
            <Board text='yesssssir' />
          </div>
        </div>
        <div className="players-footer">
          <Players numPlayers="7" />
        </div>
      </div>
    );
  }
}

export default Game;
