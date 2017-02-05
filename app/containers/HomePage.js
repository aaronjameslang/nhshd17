// @flow
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Home from '../components/Home';
import * as FileLocationActions from '../actions/fileLocation';

function mapStateToProps(state) {
  // console.log(state.filePath)
  // state.filePath = 'foo/bar/bass'
  // return state
  return {
    filePath: state.filePath
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(FileLocationActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);



// import React, { Component } from 'react';


// export default class HomePage extends Component {
//   render() {
//     return (
//       <div>
//         <Home />
//       </div>
//     );
//   }
// }
