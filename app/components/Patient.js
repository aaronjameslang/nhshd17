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

export default class Patient extends Component {
  handleClick() {
    hashHistory.push(`/patient`)
  }

  render() {
    return (
      <div>
        <Paper style={{padding: '20px'}} zDepth={1}>
          <TextField
            hintText="NHS Number"
          /><br />
          <TextField
            hintText="First Name"
          /><br />
          <TextField
            hintText="Second Name"
          /><br />
          <TextField
            hintText="Address..."
            multiLine={true}
            rows={2}
            rowsMax={4}
          /><br />
          <TextField
            hintText="Postcode"
          /><br />
          <TextField
            hintText="Date Of Birth (YYYY-MM-DD)"
          /><br />
          <RaisedButton label="Save Patient" primary={true} style={{margin: 12}} onClick={ this.handleClick.bind(this) } />
        </Paper>
      </div>
    );
  }
}
