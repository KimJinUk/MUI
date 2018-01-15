import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Slider from 'material-ui/Slider';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

function handleActive(tab) {
  alert(`A tab with this route property ${tab.props['data-route']} was activated.`);
}

const TabsExampleIconText = () => (
  <MuiThemeProvider>
  <Tabs>
    <Tab
      icon={<FontIcon className="material-icons">phone</FontIcon>}
      label="RECENTS"
    />
    <Tab
      icon={<FontIcon className="material-icons">favorite</FontIcon>}
      label="FAVORITES"
    />
    <Tab
      onActive={handleActive}
      icon={<MapsPersonPin />}
      label="NEARBY"
    />
  </Tabs>
  </MuiThemeProvider>
);

export default TabsExampleIconText;