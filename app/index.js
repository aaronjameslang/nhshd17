import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import routes from './routes';
import configureStore from './store/configureStore';
import './app.global.css';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store);

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: '#005EB8',
    },
});

render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <Provider store={store}>
      <Router history={history} routes={routes} />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);
