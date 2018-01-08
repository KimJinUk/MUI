import React, {Component} from 'react';
import Toggle from 'material-ui/Toggle';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const styles = {
  block: {
    maxWidth: 250,
  },
  toggle: {
    marginBottom: 16,
  },
  thumbOff: {
    backgroundColor: '#ffcccc',
  },
  trackOff: {
    backgroundColor: '#ff9d9d',
  },
  thumbSwitched: {
    backgroundColor: 'red',
  },
  trackSwitched: {
    backgroundColor: '#ff9d9d',
  },
  labelStyle: {
    color: 'red',
  },
};

export default class RadioButtonExampleSimple extends Component {
	constructor(props) {
    	super(props);
    	this.state={

    	}
    }

    render() {
    	return(
    		<MuiThemeProvider>
    			<div style={styles.block}>
				    <Toggle
				      label="Simple"
				      style={styles.toggle}
				    />
				    <Toggle
				      label="Toggled by default"
				      defaultToggled={true}
				      style={styles.toggle}
				    />
				    <Toggle
				      label="Disabled"
				      disabled={true}
				      style={styles.toggle}
				    />
				    <Toggle
				      label="Label on the right"
				      labelPosition="right"
				      thumbStyle={styles.thumbOff}
				      trackStyle={styles.trackOff}
				      thumbSwitchedStyle={styles.thumbSwitched}
				      style={styles.toggle}
				    />
				    <Toggle
				      label="Styling"
				      thumbStyle={styles.thumbOff}
				      trackStyle={styles.trackOff}
				      thumbSwitchedStyle={styles.thumbSwitched}
				      trackSwitchedStyle={styles.trackSwitched}
				      labelStyle={styles.labelStyle}
				    />
				</div>
    		</MuiThemeProvider>
    	)
    }
}