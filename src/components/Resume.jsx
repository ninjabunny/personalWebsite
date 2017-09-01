import React, { Component } from "react";
import { browserHistory } from 'react-router';

export default class Resume extends Component {
  componentDidMount() {
    browserHistory.push('/');
  }
  render() {
    return (
      <div>
          Resume
      </div>
    );
  }
}