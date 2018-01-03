import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

class Login extends Component {

	constructor(props) {
		super(props)

		let muiName = 'FlatButton';	
	}
	

	render() {
		return(
			<FlatButton {...this.props} label="Login"/>
		);
	}
}

const Logged = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
      	<IconButton>
      		<MoreVertIcon />
      	</IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem primaryText="Refresh" />
    <MenuItem primaryText="Help" />
    <MenuItem primaryText="Sign out" />
  </IconMenu>
);

Logged.muiName = 'IconMenu';

class AppBarTemplete extends Component {

	constructor(props) {
		super(props)

		this.state = {
    		logged: true,
  		};
	}

  	render() {
  		return (
  			<MuiThemeProvider>
					<AppBar
						title="To do List11"
						iconElementRight={this.state.logged ? <Logged /> : <Login />}
						style={{textAlign:"center"}}
					/>
			</MuiThemeProvider>
  		)
  	}
}

export default AppBarTemplete;