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
        <Paper style={{paddingLeft: '100px', paddingRight: '50px', paddingTop: '5px', paddingBottom: '20px'}} zDepth={1}>
          <p>For those who had labour epidural</p>
          How effective was it for your labour:
          <Slider step={0.20} />
          How effective during delivery:
          <Slider step={0.20} />
          Where you satisfied with your pain relief:
          <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
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
          <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
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
          <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
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
          <RaisedButton label="Save Follow Up Assessment" primary={true} style={{margin: 12}} onClick={ this.handleClick.bind(this) } />
        </Paper>
      </div>
    );
  }
}
