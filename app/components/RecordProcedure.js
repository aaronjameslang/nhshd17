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

export default class RecordProceudure extends Component {
  constructor() {
    super();
    this.state = {}
  }

  handleChange(name, event) {
    const state = this.state
    state[name] = event.target.value
    this.setState(state)
  }

  handleClick() {
    hashHistory.push(`/follow_up`)
  }

  render() {
    return (
      <div>
        <Paper style={{padding: '20px'}} zDepth={1}>
          <TextField
            hintText="Date (YYYY-MM-DD)"
            onChange={ this.handleChange.bind(this, 'date') }
          /><br />
          <TextField
            hintText="Time (HH:MM)"
            onChange={ this.handleChange.bind(this, 'time') }
          /><br />
          <p>Anthstetic Given:</p>
          <Toggle
            label="GA"
            onChange={ this.handleChange.bind(this, 'GA') }
          />
          <Toggle
            label="Spinal"
            onChange={ this.handleChange.bind(this, 'Spinal') }
          />
          <Toggle
            label="CES"
            onChange={ this.handleChange.bind(this, 'CES') }
          />
          <Toggle
            label="Epidural / Top Up"
            onChange={ this.handleChange.bind(this, 'Epidural') }
          />
          <p>Procedure:</p>
          <Toggle
            label="Pain Relief"
            onChange={ this.handleChange.bind(this, 'PainRelief') }
          />
          <Toggle
            label="CS"
            onChange={ this.handleChange.bind(this, 'CS') }
          />
          <Toggle
            label="Instrumental Delivery"
            onChange={ this.handleChange.bind(this, 'InstrumentalDelivery') }
          />
          <Toggle
            label="Other"
            onChange={ this.handleChange.bind(this, 'Other') }
          />
          <Toggle
            label="Paraesthesia"
            onChange={ this.handleChange.bind(this, 'Paraesthesia') }
          />
          <RaisedButton
            label="Record Procedure"
            primary={true}
            style={{margin: 12}}
            onClick={() => this.handleClick() }
          />
        </Paper>
      </div>
    );
  }
}
