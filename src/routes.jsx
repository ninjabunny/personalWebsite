import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './app';
import Home from './components/home';
import About from './components/About';
import Work from './components/Work';
import Resume from './components/Resume';
import Blog from './components/Blog';
import Donate from './components/Donate';


export default (
  <Router history={browserHistory}>
    <Route path='/' components={Home} />
    <Route path='/about' components={About} />
    <Route path='/work' components={Work} />
    <Route path='/resume' components={Resume} />
    <Route path='/log' components={Blog} />
    <Route path='/donate' components={Donate} />
  </Router>
);