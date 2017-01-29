import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import { hashHistory } from 'react-router';

const logoutIcon = <FontIcon className="material-icons">Logout</FontIcon>;

/**
 * A simple example of `BottomNavigation`, with three labels and icons
 * provided. The selected `BottomNavigationItem` is determined by application
 * state (for instance, by the URL).
 */
class FooterNav extends Component {
  handleClick() {
    hashHistory.push('/counter')
  }

  render() {
    return (
      <Paper zDepth={1}>
        <BottomNavigation selectedIndex={ 0 }>
          <BottomNavigationItem
            label="Logout"
            icon={ logoutIcon }
            onClick={ this.handleClick.bind() }
          />
        </BottomNavigation>
      </Paper>
    );
  }
}

export default FooterNav;
