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
import DialogTemplete from './DialogTemplete';
import DividerTemplete from './DividerTemplete';
import DrawerTemplete from './DrawerTemplete';
import GridTemplete from './GridTemplete';
import ListTemplete from './ListTemplete';
import MenuTemplete from './MenuTemplete';
import ProgressTemplete from './ProgressTemplete';
import SelectFieldTemplete from './SelectFieldTemplete';
import SliderTemplete from './SliderTemplete';
import SwitchesTemplete from './SwitchesTemplete';
import SnackBarTemplete from './SnackBarTemplete';

class App extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
		}
	}

    render(){
    	
        return (
            <SnackBarTemplete/>
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
            <DatePickerTemplete/>
            <DialogTemplete/>
            <DividerTemplete/>
            <DrawerTemplete/>
            <GridTemplete/>
            <ListTemplete/>
            <MenuTemplete/>
            <ProgressTemplete/>
            <SelectFieldTemplete/>
            <SliderTemplete/>
            <SwitchesTemplete/>
*/