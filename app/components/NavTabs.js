import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import { hashHistory } from 'react-router';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

export default class NavTabs extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 'a',
    };
  }

  handleChange = (value) => {
    this.setState({
      value: value,
    });
  };

  handleClick(id) {
    var page = ''
    if (id === 0) {
      page = 'login'
    } else if (id === 1) {
      page = 'patient'
    } else if (id === 2) {
      page = 'record_procedure'
    } else if (id === 3) {
      page = 'follow_up'
    }

    hashHistory.push('/' + page)
  }

  render() {
    return (
      <Tabs
        value={this.state.value}
        onChange={this.handleChange}
      >
        <Tab label="Settings" value="settings" onClick={ this.handleClick.bind(this, 0) } />
        <Tab label="Patient" value="patient" onClick={ this.handleClick.bind(this, 1) } />
        <Tab label="Record Procedure" value="record_procedure" onClick={ this.handleClick.bind(this, 2) } />
        <Tab label="Follow Up" value="follow_up" onClick={ this.handleClick.bind(this, 3) } />
      </Tabs>
    );
  }
}
