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
import { ipcRenderer } from 'electron';

console.log(window.innerHeight + 'px')

const screenSize = {
  height: window.innerHeight + 'px'
}

const paperStyle = {
  paddingLeft: '100px',
  paddingRight: '50px',
  paddingTop: '20px',
  paddingBottom: '20px',
  height: '80vh',
  overflow: 'scroll',
}

const contentStyle = {
  width: '50%',
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
    const toSave = this.state
    const csvString = Object.keys(toSave).map(function(k){return toSave[k]}).join("','")
    ipcRenderer.send('create-record', '/tmp/followapp_recordProcedure', "'" + csvString + "'\r\n")
    this.state = {}
    hashHistory.push(`/follow_up`)
  }

  render() {
    return (
      <div>
        <Paper style={ paperStyle } zDepth={1}>
          <div style={ contentStyle }>
            <TextField
              hintText="Date (YYYY-MM-DD)"
              onChange={ this.handleChange.bind(this, 'date') }
            /><br />
            <TextField
              hintText="Time (HH:MM)"
              onChange={ this.handleChange.bind(this, 'time') }
            /><br />
            <TextField
              hintText="Anaesthetist 1"
              onChange={ this.handleChange.bind(this, 'anaesthetist_1') }
            /><br />
            <TextField
              hintText="Anaesthetist 2"
              onChange={ this.handleChange.bind(this, 'anaesthetist_2') }
            /><br />
            <p>Anaesthetic Given:</p>
            <Toggle
              label="GA"
              onChange={ this.handleChange.bind(this, 'GA') }
            />
            <Toggle
              label="Spinal"
              onChange={ this.handleChange.bind(this, 'Spinal') }
            />
            <Toggle
              label="CSE"
              onChange={ this.handleChange.bind(this, 'CSE') }
            />
            <Toggle
              label="Epidural / Top Up"
              onChange={ this.handleChange.bind(this, 'Epidural') }
            />
            <p>Procedure Indication:</p>
            <Toggle
              label="Pain Relief"
              onChange={ this.handleChange.bind(this, 'PainRelief') }
            />
            <Toggle
              label="LSCS"
              onChange={ this.handleChange.bind(this, 'LCCS') }
            />
            <TextField
              label="Grade"
              hintText="1, 2, 3, 4"
              onChange={ this.handleChange.bind(this, 'LSCS_grade') }
            />
            <Toggle
              label="Instrumental Delivery"
              onChange={ this.handleChange.bind(this, 'InstrumentalDelivery') }
            />
            <Toggle
              label="Other"
              onChange={ this.handleChange.bind(this, 'Other') }
            />
            <RaisedButton
              label="Record Procedure"
              primary={true}
              style={{margin: 12}}
              onClick={() => this.handleClick() }
            />
          </div>
        </Paper>
      </div>
    );
  }
}
