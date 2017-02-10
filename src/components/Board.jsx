import React, { Component } from 'react';
import '../styles/Board.css';
import Mission from './Mission';


class Board extends Component {
  constructor() {
    super();
  }
  renderMission(i) {
    return <Mission value={i} />
  }
  render() {
    return (
      <div className="row">
        <div className="col-5 board-column">
          {this.renderMission(1)}
        </div>
        <div className="col-5 board-column">
          {this.renderMission(2)}
        </div>
        <div className="col-5 board-column">
          {this.renderMission(3)}
        </div>
        <div className="col-5 board-column">
          {this.renderMission(4)}
        </div>
        <div className="col-5 board-column">
          {this.renderMission(5)}
        </div>
      </div>
    );
  }
}

export default Board;
