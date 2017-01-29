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

export default class FollowUp extends Component {
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

    console.log(csvString)
    ipcRenderer.send('create-record', '/tmp/followapp_followUp', "'" + csvString + "'\r\n")
    this.state = {}
    hashHistory.push(`/patient`)
  }

  render() {
    return (
      <div>
        <Paper style={ paperStyle } zDepth={1}>
          <div style={ contentStyle }>
            <h2 style={{color: '#232C39'}}>Follow Up</h2>
            <p>For those who had labour epidural</p>
            How effective was it for you labour:
            <Slider
              step={0.20}
              onChange={ this.handleChange.bind(this, 'during_labour') }
            />
            How effective during delivery:
            <Slider
              step={0.20}
              onChange={ this.handleChange.bind(this, 'during_delivery') }
            />
            Were you satisfied with your pain relief?
            <RadioButtonGroup
              name="satisfied_with_pain_relief"
              defaultSelected="not_light"
              onChange={ this.handleChange.bind(this, 'satisfied_with_pain_relief') }
            >
              <RadioButton
                value="yes"
                label="Yes"
              /><RadioButton
                value="no"
                label="No"
              /><RadioButton
                value="n/a"
                label="N/A"
              />
            </RadioButtonGroup><br />
            Did the epidural stop working at any point?<br />
            <RadioButtonGroup
              name="epidural_stop_working"
              defaultSelected="not_light"
              onChange={ this.handleChange.bind(this, 'epidural_stop_working') }
            >
              <RadioButton
                value="yes"
                label="Yes"
              /><RadioButton
                value="no"
                label="No"
              /><RadioButton
                value="n/a"
                label="N/A"
              />
            </RadioButtonGroup><br />
            Did the epidural 'fall out' at any point?<br />
            <RadioButtonGroup
              name="shipSpeed"
              defaultSelected="not_light"
              onChange={ this.handleChange.bind(this, 'epidural_fall_out') }
            >
              <RadioButton
                value="yes"
                label="Yes"
                style={{ display: 'inline-block' }}
              /><RadioButton
                value="no"
                label="No"
                style={{ display: 'inline-block' }}
              /><RadioButton
                value="n/a"
                label="N/A"
                style={{ display: 'inline-block' }}
              />
            </RadioButtonGroup><br />
            <RaisedButton label="Save Follow Up Assessment" primary={true} style={{margin: 12}} onClick={() => this.handleClick() } />
          </div>
        </Paper>
      </div>
    );
  }
}
