// @flow
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import Home from '../components/Home';
import * as FileLocationActions from '../actions/fileLocation';

function mapStateToProps(state) {
  return {
    filePath: state.filePath
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(FileLocationActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
