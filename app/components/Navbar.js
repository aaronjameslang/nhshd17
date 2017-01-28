// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import AppBar from 'material-ui/AppBar';

import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import LoggedInMenu from './LoggedInMenu';

export default class Navbar extends Component {
  render() {
    return (
      <AppBar
        title="Fancy App Name Goes Here"
        iconElementLeft={ <LoggedInMenu /> }
      />
    );
  }
}
