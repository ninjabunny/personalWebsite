import React, { Component } from "react";
import { browserHistory } from 'react-router';

export default class Donate extends Component {
  componentDidMount() {
    browserHistory.push('/');
  }
  render() {
    return (
      <div>
          Donate
      </div>
    );
  }
}