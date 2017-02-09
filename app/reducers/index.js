// @flow
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import counter from './counter';
import filePath from './fileLocation';

const rootReducer = combineReducers({
  filePath,
  counter,
  routing
});

export default rootReducer;
