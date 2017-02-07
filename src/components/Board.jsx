import React, { Component } from 'react';
import '../styles/Board.css';


class Board extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          This is the board object { this.props.text }
        </p>
      </div>
    );
  }
}

export default Board;
