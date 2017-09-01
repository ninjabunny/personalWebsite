import React, { Component } from "react";
import Header from './components/Header'
export default class App extends Component {
  render() {
    return (
      <div>
        {this.props.children}
        <Header />
      </div>
    );
  }
}