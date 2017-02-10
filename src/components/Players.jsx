import React, { Component } from 'react';
import '../styles/Players.css';

import Player from './Player';

class Players extends Component {
  constructor() {
    super();
  }
  render() {
    var players = [];
    var styleClass = 'col-'.concat(this.props.numPlayers);
    for (var i = 0; i < parseInt(this.props.numPlayers); i++) {
      players.push(
        <div className={styleClass}>
          <Player p_num={i} />
        </div>
      )
    }
    return (
      <div className="row">
        {players}
      </div>
    );
  }
}

export default Players;
