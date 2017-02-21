import React, { Component } from 'react';
import '../styles/Board.css';
import Mission from './Mission';


class Board extends Component {
  constructor() {
    super();
  }
  renderMission(agentcount, failsrequired, agentlist, victor) {
    return (<Mission
            agentCount={agentcount}
            failsRequired={failsrequired}
            agentList={agentlist}
            victor={victor} />)
  }
  render() {
    return (
      <div className="row">
        <div className="col-5 board-column">
          {this.renderMission(3,1,['craig','jeff','spense'],'SPY')}
        </div>
        <div className="col-5 board-column">
          {this.renderMission(4,1,['Mom', 'Dad', 'Corey', 'Hazel'],'RES')}
        </div>
        <div className="col-5 board-column">
          {this.renderMission(5,2,[],null)}
        </div>
        <div className="col-5 board-column">
          {this.renderMission(4,1,[],null)}
        </div>
        <div className="col-5 board-column">
          {this.renderMission(5,1,[],null)}
        </div>
      </div>
    );
  }
}

export default Board;
