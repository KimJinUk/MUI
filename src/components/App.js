import React from 'react';
import update from 'react-addons-update';
import AppBarTemplete from './AppBarTemplete';
import AutoCompleteTemplete from './AutoCompleteTemplete';
import Avatar from './Avatar';
import BadgeTemplete from './BadgeTemplete';
import BottomNavigationTemplete from './BottomNavigationTemplete';
import FlatButtonTemplete from './FlatButtonTemplete';
import CardTemplete from './CardTemplete';
import ChipTemplete from './ChipTemplete';
import DatePickerTemplete from './DatePickerTemplete';

class App extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			user : [{
				userIndex : 1,
				userName : 'kim Jin Uk',
				userDescription : 'hello',
				isBuy : false
			}],

		}
	}

    render(){
    	
        return (
                <div>
                   <DatePickerTemplete/>
                </div>
        );
    }
}

export default App;

/*
                	<AppBarTemplete/>
                	<AutoCompleteTemplete/>
                	<Avatar/>
                	<BadgeTemplete/>
                    <BottomNavigationTemplete/>
                    <FlatButtonTemplete/>
	                <CardTemplete user = {this.state.user} />
	                <ChipTemplete/>
*/