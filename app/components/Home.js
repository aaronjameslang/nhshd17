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
  props: {
    getFilePath: () => void,
    saveFilePath: () => void,
    filePath: string
  };

  constructor() {
    super();
    this.state = {
      filePath: ""
    }
  };

  handleChange(name, event) {
    const state = this.state
    state[name] = event.target.value
    this.setState(state)
  };

  handleClick(e) {
    const { saveFilePath } = this.props
    saveFilePath(this.state.filePath)
  }

  render() {
    const { getFilePath } = this.props
    const filePath = getFilePath()

    if (this.state.filePath == '') {
      this.state.filePath = filePath
    }

    return (
      <div>
        <Paper style={ paperStyle } zDepth={1}>
          <div style={ contentStyle }>
            <h2 style={{color: '#232C39'}}>Settings</h2>
            <TextField
              hintText="/tmp/followapp"
              floatingLabelText="File Location"
              name="filePath"
              value={ this.state.filePath }
              onChange={ this.handleChange.bind(this, 'filePath') }
            /><br />
            <RaisedButton label="Save" primary={true} style={{margin: 12}} onClick={ this.handleClick.bind(this) } />
          </div>
        </Paper>
      </div>
    );
  }
}
