import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

export default class SelectFieldExampleNullable extends Component {
	constructor(props) {
		super(props)
		this.state = {
		    value: []
		  };

		this.handleChange=this.handleChange.bind(this);
	}

  handleChange (event, index, value) {
  	this.setState({value})
  }

  menuItems(values) {
    return names.map((name) => (
      <MenuItem
        key={name}
        insetChildren={true}
        checked={values && values.indexOf(name) > -1}
        value={name}
        primaryText={name}
      />
    ));
  }

  render() {
    return (
      <MuiThemeProvider>
      <SelectField
        multiple={true}
        hintText="Select a name"
        value={this.state.value}
        onChange={this.handleChange}
      >
        {this.menuItems(this.state.value)}
      </SelectField>
      </MuiThemeProvider>
    );
  }
}