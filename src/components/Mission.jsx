import React, { Component } from 'react';
import '../styles/Mission.css';

class Mission extends Component {
  constructor() {
    super();
  }
  render() {
    if (this.props.agentList){
      var agentlist = this.props.agentList.map((agent) => {
        return (<div key={'agent-'+agent}>{agent}</div>)
      })
    } else {
      var agentlist = null;
    }
    return(
      <div className="container">
        <div className="half upper-half">
          <div className="mission-box">
            <span className={"circle " + `victor-${this.props.victor}`}>
              {this.props.agentCount}
            </span>
            {(this.props.failsRequired > 1
              ? <span className="fails-req">{this.props.failsRequired} fails required</span>
              : null)}
          </div>
        </div>
        <div className="half lower-half">
          {agentlist}
        </div>
      </div>
    );
  }
}

export default Mission
