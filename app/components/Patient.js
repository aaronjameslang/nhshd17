// @flow
import React, { Component } from 'react';
import { Link, hashHistory } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
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

export default class Patient extends Component {
  constructor() {
    super();
    this.state = {}
  }

  handleClick() {
    const toSave = this.state
    const csvString = Object.keys(toSave).map(function(k){return toSave[k]}).join("','")
    ipcRenderer.send('create-record', '/tmp/followapp_patient', "'" + csvString + "'\r\n")
    this.state = {}
    hashHistory.push('/record_procedure')
  }

  handleChange(name, event) {
    const state = this.state
    state[name] = event.target.value
    this.setState(state)
  }

  render() {
    return (
      <div>
        <Paper style={ paperStyle } zDepth={1}>
          <div style={ contentStyle }>
            <h2 style={{color: '#232C39'}}>Patient</h2>
            <TextField
              hintText="NHS Number"
              onChange={ this.handleChange.bind(this, 'nhs_number') }
            /><br />
            <TextField
              hintText="First Name"
              onChange={ this.handleChange.bind(this, 'first_name') }
            /><br />
            <TextField
              hintText="Second Name"
              onChange={ this.handleChange.bind(this, 'second_name') }
            /><br />
            <TextField
              hintText="Address..."
              onChange={ this.handleChange.bind(this, 'address') }
              multiLine={true}
              rows={2}
              rowsMax={4}
            /><br />
            <TextField
              hintText="Postcode"
              onChange={ this.handleChange.bind(this, 'postcode') }
            /><br />
            <TextField
              hintText="Date Of Birth (YYYY-MM-DD)"
              onChange={ this.handleChange.bind(this, 'dob') }
            /><br />
            <RaisedButton
              label="Save Patient"
              primary={ true }
              style={{ margin: 12 }}
              onClick={() => this.handleClick()}
            />
          </div>
        </Paper>
      </div>
    );
  }
}
