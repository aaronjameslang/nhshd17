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
    var page = 'patient'
    if (id === 0) {
      page = 'patient'
    } else if (id === 1) {
      page = 'record_procedure'
    } else if (id === 2) {
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
        <Tab label="Patient" value="patient" onClick={ this.handleClick.bind(this, 0) } />
        <Tab label="Record Procedure" value="record_procedure" onClick={ this.handleClick.bind(this, 1) } />
        <Tab label="Follow Up" value="follow_up" onClick={ this.handleClick.bind(this, 2) } />
      </Tabs>
    );
  }
}
