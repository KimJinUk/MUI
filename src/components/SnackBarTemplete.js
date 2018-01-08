import React from 'react';
import Snackbar from 'material-ui/Snackbar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class SnackbarExampleSimple extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      message: 'Event 1 added to your calendar',
      open: false,
      num: 1
    };
    this.timer = undefined;
    this.handleClick=this.handleClick.bind(this);
    this.handleRequestClose=this.handleRequestClose.bind(this);
  }

  handleClick() {
    this.setState({
      open: true,
    });
    this.timer = setTimeout(() => {
      this.setState({
        message: `Event ${this.state.num} added to your calendar`,
        num: this.state.num + 1
      });
    }, 1500);
  };

  handleRequestClose() {
    this.setState({
      open: false,
    });
  };

  componetWillUnmount() {
  	clearTimeout(this.timer);
  }

  render() {
    return (
      <MuiThemeProvider>
  	  <div>
        <RaisedButton
          onClick={this.handleClick}
          label="Add to my calendar two times"
        />
        <Snackbar
          open={this.state.open}
          message={this.state.message}
          action="undo"
          autoHideDuration={3000}
          onRequestClose={this.handleRequestClose}
        />
      </div>
      </MuiThemeProvider>
    );
  }
}