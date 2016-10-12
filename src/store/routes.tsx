import * as React from 'react';
const { IndexRoute, Route } = require('react-router');

import App from '../containers/app';
import AboutPage from '../containers/about-page';
import ListPage from '../containers/list-page';
import CounterPage from '../containers/counter-page';


export default (
  <Route path="/" component={ App }>
    <IndexRoute component={ CounterPage }/>
    <Route path="about" component={ AboutPage }/>
    <Route path="lists" component={ ListPage }/>
  </Route>
);
