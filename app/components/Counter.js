// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Counter.css';

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
    this.state = {text: 'apple'}
  }

  handleChange(event) {
    this.setState({text: event.target.value});
  }

  reverse() {
    const {ipcRenderer} = require('electron')
    const text = ipcRenderer.sendSync('reverse', this.state.text)
    this.setState({text: text})
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
          <input type="text" value={this.state.text} onChange={this.handleChange.bind(this)}/>
          <button onClick={() => this.reverse()}>Reverse</button>
        </form>
      </div>
    );
  }
}

export default Counter;
