// @flow
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import Settings from '../components/Settings';
import * as FileLocationActions from '../actions/fileLocation';

function mapStateToProps(state) {
  return {
    filePath: state.filePath
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(FileLocationActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
