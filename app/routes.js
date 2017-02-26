// @flow
import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './containers/App';
import SettingsPage from './containers/SettingsPage';
import PatientsPage from './containers/PatientsPage';
import PatientPage from './containers/PatientPage';
import RecordProcedurePage from './containers/RecordProcedurePage';
import FollowUpPage from './containers/FollowUpPage';

export default (
  <Route path="/" component={App} history={hashHistory}>
    <IndexRoute component={SettingsPage} />
    <Route path="/settings" component={SettingsPage} />
    <Route path="/patients" component={PatientsPage} />
    <Route path="/patient" component={PatientPage} />
    <Route path="/record_procedure" component={RecordProcedurePage} />
    <Route path="/follow_up" component={FollowUpPage} />
  </Route>
);
