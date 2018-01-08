import React from 'react';
import Divider from 'material-ui/Divider';
import {Menu, MenuItem} from 'material-ui/Menu';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const style = {
  // Without this, the menu overflows the CodeExample container.
  float: 'left',
};

const DividerExampleForm = () => (
  <MuiThemeProvider>
  <Menu desktop={true} style={style}>
    <MenuItem primaryText="Settings" />
    <MenuItem primaryText="Help & feedback" />
    <Divider inset={true}/>
    <MenuItem primaryText="Sign out" />
    <Divider inset={true}/>
  </Menu>
  </MuiThemeProvider>
);

export default DividerExampleForm;