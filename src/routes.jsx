import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './app';
import Home from './components/home';
import About from './components/About';
import Work from './components/Work';
import Resume from './components/Resume';
import Blog from './components/Blog';
import Donate from './components/Donate';


export default (
  <Route path='/' components={App}>
    <IndexRoute components={Home} />
    <Route path='about' components={About} />
    <Route path='work' components={Work} />
    <Route path='resume' components={Resume} />
    <Route path='blog' components={Blog} />
    <Route path='donate' components={Donate} />
  </Route>
);