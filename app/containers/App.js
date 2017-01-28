// @flow
import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import NavTabs from '../components/NavTabs';
import FooterNav from '../components/FooterNav';

export default class App extends Component {
  props: {
    children: HTMLElement
  };

  render() {
    return (
      <div>
        <Navbar />
        <NavTabs />
        <div>
          {this.props.children}
        </div>
        <FooterNav />
      </div>
    );
  }
}
