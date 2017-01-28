// @flow
import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import PatientPage from './containers/PatientPage';


export default (
  <Route path="/" component={App} history={hashHistory}>
    <IndexRoute component={HomePage} />
    <Route path="/login" component={HomePage} />
    <Route path="/patient" component={PatientPage} />
  </Route>
);
