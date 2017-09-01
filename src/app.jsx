import React, { Component } from "react";
import Header from './components/Header'

import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Home from './components/home';
import About from './components/About';
import Work from './components/Work';
import Resume from './components/Resume';
import Blog from './components/Blog';
import Donate from './components/Donate';


export default class App extends Component {
  render() {
    return (
		<Router history={browserHistory}>
		  <Route path='/' component={Header}>
			  <IndexRoute component={Home} />
			  <Route path='/about' components={About} />
			  <Route path='/work' components={Work} />
			  <Route path='/resume' components={Resume} />
			  <Route path='/blog' components={Blog} />
			  <Route path='/donate' components={Donate} />
		  </Route>
		</Router>
    );
  }
}