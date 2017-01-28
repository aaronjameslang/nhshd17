// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Counter.css';
import {ipcRenderer} from 'electron';

class Counter extends Component {
  props: {
    increment: () => void,
    incrementIfOdd: () => void,
    incrementAsync: () => void,
    decrement: () => void,
    counter: number
  };

  constructor(props) {
    super(props)
    this.state = {
      filepath: '/tmp/followapp',
      record: 'Enter patient record here',
      records: ''
    }
    ipcRenderer.on('all-records', (event, records) => {
      this.setState({records: records})
    })
  }

  handleChange(name, event) {
    const state = {}
    state[name] = event.target.value
    this.setState(state);
  }

  createRecord() {
    ipcRenderer.send('create-record', this.state.filepath, this.state.record)
  }

  render() {
    const { increment, incrementIfOdd, incrementAsync, decrement, counter } = this.props;
    return (
      <div>
        <div className={styles.backButton}>
          <Link to="/">
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div>
        <div className={`counter ${styles.counter}`}>
          {counter}
        </div>
        <div className={styles.btnGroup}>
          <button className={styles.btn} onClick={increment}>
            <i className="fa fa-plus" />
          </button>
          <button className={styles.btn} onClick={decrement}>
            <i className="fa fa-minus" />
          </button>
          <button className={styles.btn} onClick={incrementIfOdd}>odd</button>
          <button className={styles.btn} onClick={() => incrementAsync()}>async</button>
        </div>
        <form>
          <textarea value={this.state.records}/><br/>
          <input type="text" value={this.state.filepath} onChange={this.handleChange.bind(this, 'filepath')}/><br/>
          <input type="text" value={this.state.record}   onChange={this.handleChange.bind(this, 'record'  )}/><br/>
          <button onClick={() => this.createRecord()}>Create Record</button><br/>
        </form>
      </div>
    );
  }
}

export default Counter;
