import React, { Component } from "react";
import { browserHistory } from 'react-router';

export default class Header extends Component {
  render() {
    return (
      <div id="header">
        {this.props.children}
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/work">Work</a></li>
          <li><a href="/resume">Resume</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/donate">Donate</a></li>
        </ul>
        <hr/>
      </div>
    );
  }
}