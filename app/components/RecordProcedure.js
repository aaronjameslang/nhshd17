// @flow
import React, { Component } from 'react';
import { Link, hashHistory } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Slider from 'material-ui/Slider';
import Toggle from 'material-ui/Toggle';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import styles from './Home.css';

const style = {
  margin: 12,
}

export default class FollowUp extends Component {
  handleClick() {
    hashHistory.push(`/patient`)
  }

  render() {
    return (
      <div>
        <Paper style={{padding: '20px'}} zDepth={1}>
          <TextField
            hintText="Date (YYYY-MM-DD)"
          /><br />
          <TextField
            hintText="Time (HH-MM)"
          /><br />
          <p>Anthstetic Given:</p>
          <Toggle
            label="GA"
          />
          <Toggle
            label="Spinal"
          />
          <Toggle
            label="CES"
          />
          <Toggle
            label="Epidural / Top Up"
          />
          <p>Procedure:</p>
          <Toggle
            label="Pain Relief"
          />
          <Toggle
            label="CS"
          />
          <Toggle
            label="Instrumental Delivery"
          />
          <Toggle
            label="Other"
          />
          <Toggle
            label="Paraesthesia"
          />
          <RaisedButton label="Record Procedure" primary={true} style={{margin: 12}} onClick={ this.handleClick.bind(this) } />
        </Paper>
      </div>
    );
  }
}
