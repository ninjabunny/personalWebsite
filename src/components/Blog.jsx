import React, { Component } from "react";
import { browserHistory } from 'react-router';

export default class Blog extends Component {
  componentDidMount() {
    browserHistory.push('/');
  }
  render() {
    return (
      <div>
          Blog
      </div>
    );
  }
}