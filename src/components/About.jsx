import React, { Component } from "react";
import { browserHistory } from 'react-router';

export default class About extends Component {
  componentDidMount() {
    browserHistory.push('/');
  }
  render() {
    return (
      <div>
          About
      </div>
    );
  }
}