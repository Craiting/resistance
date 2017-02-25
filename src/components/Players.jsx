import React, { Component } from 'react';
import '../styles/Players.css';

import Player from './Player';

class Players extends Component {
  constructor() {
    super();
  }
  render() {
    let players = [];
    let styleClass = 'col-'.concat(this.props.numPlayers);
    for (var i = 0; i < parseInt(this.props.numPlayers); i++) {
      players.push(
        <div key={i} className={'player-col ' + styleClass}>
          <Player p_num={i+1} name={"player"} showVotes={true} />
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
