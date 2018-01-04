import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AutoComplete from 'material-ui/AutoComplete';
import MenuItem from 'material-ui/MenuItem';

const dataSource1 = [
  {
    text: 'text-value1',
    value: (
      <MenuItem
        primaryText="text-value1"
        secondaryText="&#9786;"
      />
    ),
  },
  {
    text: 'text-value2',
    value: (
      <MenuItem
        primaryText="text-value2"
        secondaryText="&#9786;"
      />
    ),
  },
];

const dataSource2 = ['12345', '23456', '34567'];

const dataSource3 = [
  {textKey: 'Some Text', valueKey: 'someFirstValue'},
  {textKey: 'Some Text', valueKey: 'someSecondValue'},
];
const dataSourceConfig = {
  text: 'textKey',
  value: 'valueKey',
};
const colors = [
  'Red',
  'Orange',
  'Yellow',
  'Green',
  'Blue',
  'Purple',
  'Black',
  'White',
];

const menuProps = {
  desktop: true,
  disableAutoFocus: false,
};


export default class AutoCompleteTemplete extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}


	render() {
		console.log(menuProps)
		return (
			<MuiThemeProvider>			
				<div>2. AutoComplete<br/>
					<AutoComplete
					  hintText="Type anything"
					  dataSource={colors}
					  menuProps={menuProps}
					/><br /><br />
				    <AutoComplete
				      hintText="text-value data"
				      filter={AutoComplete.noFilter}
				      dataSource={dataSource1}
				    /><br />
				    <AutoComplete
				      floatingLabelText="showAllItems"
				      filter={AutoComplete.noFilter}
				      openOnFocus={true}
				      dataSource={dataSource2}
				    /><br />
				    <AutoComplete
				      floatingLabelText="Same text, different values"
				      filter={AutoComplete.noFilter}
				      openOnFocus={true}
				      dataSource={dataSource3}
				      dataSourceConfig={dataSourceConfig}
				    />
				</div>
			</MuiThemeProvider>
		);
	}
}