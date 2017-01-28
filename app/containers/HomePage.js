// @flow
import React, { Component } from 'react';
import Home from '../components/Home';
import Navbar from '../components/Navbar';

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Home />
      </div>
    );
  }
}
