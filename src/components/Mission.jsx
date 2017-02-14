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
          {(this.props.failsRequired > 1
            ? <span>{this.props.failsRequired} fails required</span>
            : null)}
          <div>
            <span>
              {this.props.agentCount}
            </span>
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
