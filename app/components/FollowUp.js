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
import Checkbox from 'material-ui/Checkbox';

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

  handleSlider(name, event, value) {
    const state = this.state
    state[name] = value
    this.setState(state)
  }

  handleClick() {
    const toSave = this.state
    const csvString = Object.keys(toSave).map(function(k){return toSave[k]}).join("','")
    ipcRenderer.send('create-record', '/tmp/followapp_followUp', "'" + csvString + "'\r\n")
    this.state = {}
    hashHistory.push(`/patient`)
  }

  render() {
    return (
      <div>
        <Paper style={ paperStyle } zDepth={1}>
          <div style={ contentStyle }>
            <h2 style={{color: '#232C39'}}>Follow-up</h2>
              <Checkbox
                  label="Discharged without follow-up"
                  style={styles.checkbox}
                  onChange={ this.handleChange.bind(this, 'discharged_without-follow-up') }
              />
            <p>For those who had labour epidural</p>
            How effective was it for your labour:
            <Slider
              step={0.20}
              onChange={ this.handleSlider.bind(this, 'during_labour') }
              name="during_labour"
            />
            How effective during delivery:
            <Slider
              step={0.20}
              onChange={ this.handleSlider.bind(this, 'during_delivery') }
            />
            Were you satisfied with your pain relief?
            <RadioButtonGroup
              name="satisfied_with_pain_relief"
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
              name="epidural"
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
            <p>For those who had an operative delivery</p>
            Did you have any discomfort during your operation?
              <Slider
                  step={0.20}
                  onChange={ this.handleSlider.bind(this, 'discomfort') }
              />
              Worst pain felt after the operation?
              <Slider
                  step={0.20}
                  onChange={ this.handleSlider.bind(this, 'after_operation_pain') }
              />
              Did you feel nauseous after the operation?"
              <Slider
                  step={0.20}
                  onChange={ this.handleSlider.bind(this, 'nausea') }
              />
              <p>For all women.</p>
              Pruritus?
              <Slider
                  step={0.20}
                  onChange={ this.handleSlider.bind(this, 'pruritus') }
              />
              Signs of symptoms of PDPH?
              <RadioButtonGroup
                  name="pdph"
                  defaultSelected="not_light"
                  onChange={ this.handleChange.bind(this, 'pdph') }>
                  <RadioButton
                      value="yes"
                      label="Yes"
                      style={{ display: 'inline-block' }}/>
                  <RadioButton
                  value="no"
                  label="No"
                  style={{ display: 'inline-block' }}/>
                  <RadioButton
                  value="possible"
                  label="Possible"
                  style={{ display: 'inline-block' }}/>
              </RadioButtonGroup><br />
              Weakness, numbness of legs?
              <RadioButtonGroup
                  name="leg_numbness_and_weakness"
                  onChange={ this.handleChange.bind(this, 'leg_numbness_and_weakness') }>
                  <RadioButton
                      value="yes"
                      label="Yes"
                      style={{ display: 'inline-block' }}/>
                  <RadioButton
                      value="no"
                      label="No"
                      style={{ display: 'inline-block' }}/>
              </RadioButtonGroup><br />
              Are you happy with the Anaesthetic Services that you received?
              <RadioButtonGroup
                  name="happy_with_services"
                  onChange={ this.handleChange.bind(this, 'happy_with_services') }>
                  <RadioButton
                      value="yes"
                      label="Yes"
                      style={{ display: 'inline-block' }}/>
                  <RadioButton
                      value="no"
                      label="No"
                      style={{ display: 'inline-block' }}/>
              </RadioButtonGroup><br />
              Would you recommend the Anaesthetic Service to your friends/family?
              <RadioButtonGroup
                  name="would_recommend"
                  onChange={ this.handleChange.bind(this, 'would_recommend') }>
                  <RadioButton
                      value="yes"
                      label="Yes"
                      style={{ display: 'inline-block' }}/>
                  <RadioButton
                      value="no"
                      label="No"
                      style={{ display: 'inline-block' }}/>
              </RadioButtonGroup><br />
              <TextField
                  hintText="Name of anaesthetist completing follow-up"
                  onChange={ this.handleChange.bind(this, 'follow-up_anaesthetist') }
              /><br />
              <TextField
                  hintText="Notes"
                  onChange={ this.handleChange.bind(this, 'follow-up_anaesthetist') }
                  multiLine={true}
                  rows={1}
              /><br />
              <Checkbox
                  label="Follow-up complete"
                  style={styles.checkbox}
                  onChange={ this.handleChange.bind(this, 'follow-up_complete') }
              />
              <RaisedButton label="Save Follow Up Assessment" primary={true} style={{margin: 12}} onClick={() => this.handleClick() } />
          </div>
        </Paper>
      </div>
    );
  }
}
