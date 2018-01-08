import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';

const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">menu</FontIcon>;
const nearbyIcon = <IconLocationOn />;

/**
 * A simple example of `BottomNavigation`, with three labels and icons
 * provided. The selected `BottomNavigationItem` is determined by application
 * state (for instance, by the URL).
 */
class BottomNavigationExampleSimple extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedIndex: 0,
    };
    this.select=this.select.bind(this);
  }

  select(index) {this.setState({selectedIndex: index});}

  render() {
    return (
      <div>
      5. BottomNavigation
        <MuiThemeProvider>
          <Paper zDepth={1}>
            <BottomNavigation selectedIndex={this.state.selectedIndex}>
              <BottomNavigationItem
                label="Recents"
                icon={<FontIcon className="material-icons">restore</FontIcon>}
                onClick={() => this.select(0)}
              />
              <BottomNavigationItem
                label="Favorites"
                icon={favoritesIcon}
                onClick={() => this.select(1)}
              />
              <BottomNavigationItem
                label="Nearby"
                icon={nearbyIcon}
                onClick={() => this.select(2)}
              />
            </BottomNavigation>
          </Paper>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default BottomNavigationExampleSimple;