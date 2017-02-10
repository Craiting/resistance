import React, { Component } from 'react';
import '../styles/VoteTrack.css';

class VoteTrack extends Component {
  render() {
    return (
      <div className="full-height">
        <table className="full-height">
          <tbody className="table-full">
          <tr className="vote-track-title"><td>Vote Track</td></tr>
          <tr className="vote-track-circle"><td className="align-center">1</td></tr>
          <tr className="vspace"></tr>
          <tr className="vote-track-circle"><td className="align-center">2</td></tr>
          <tr className="vspace"></tr>
          <tr className="vote-track-circle"><td className="align-center">3</td></tr>
          <tr className="vspace"></tr>
          <tr className="vote-track-circle"><td className="align-center">4</td></tr>
          <tr className="vspace"></tr>
          <tr className="vote-track-circle red-circle"><td className="align-center">5</td></tr>
          <tr className="vspace"></tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default VoteTrack;
