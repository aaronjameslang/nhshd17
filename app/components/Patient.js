// @flow
import React, { Component } from 'react';
import { Link, hashHistory } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import styles from './Home.css';

const style = {
  margin: 12,
}

export default class Home extends Component {
  handleClick() {
    hashHistory.push(`/patient`)
  }

  render() {
    return (
      <div>
        <Paper style={{padding: '20px'}} zDepth={1}>
          <RaisedButton label="Save Patient" primary={true} style={{margin: 12}} onClick={ this.handleClick.bind(this) } />
        </Paper>
      </div>
    );
  }
}
