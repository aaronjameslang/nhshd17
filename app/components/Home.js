// @flow
import React, { Component } from 'react';
import { Link, hashHistory } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import styles from './Home.css';

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

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      filepath: '/tmp/followapp',
    }
  };

  props: {
    saveFile: () => void,
  };

  handleChange(name, event) {
    const state = this.state
    state[name] = event.target.value
    this.setState(state);
  };

  handleClick(e) {
    console.log(this.state)
    // hashHistory.push(`/patient`)
  }

  render() {
    return (
      <div>
        <Paper style={ paperStyle } zDepth={1}>
          <div style={ contentStyle }>
            <h2 style={{color: '#232C39'}}>Settings</h2>
            <TextField
              hintText="/tmp/followapp"
              floatingLabelText="File Location"
              name="filepath"
              value={ this.state.filepath }
              onChange={ this.handleChange.bind(this, 'filepath') }
            /><br />
            <RaisedButton label="Save" primary={true} style={{margin: 12}} onClick={ this.handleClick.bind(this) } />
          </div>
        </Paper>
      </div>
    );
  }
}
