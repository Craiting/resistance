import React, { Component } from 'react';
import '../styles/Board.css';

class Mission extends Component {
  constructor() {
    super();
  }
  render() {
    return(
      <div>
        hey {this.props.value}
      </div>
    );
  }
}

export default Mission
