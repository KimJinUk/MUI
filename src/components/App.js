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
import StepperTemplete from './StepperTemplete';
import SubheaderTemplete from './SubheaderTemplete';
import TableTemplete from './TableTemplete';
import TabsTemplete from './TabsTemplete';
import TextFieldTemplete from './TextFieldTemplete';
import TimePickerTemplete from './TimePickerTemplete';
import ToolbarTemplete from './ToolbarTemplete';


class App extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
		}
	}

    render(){
    	
        return (
            <ToolbarTemplete/>
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
            <SnackBarTemplete/>
            <StepperTemplete/>
            <SubheaderTemplete/>
            <TableTemplete/>
            <TabsTemplete/>
            <TextFieldTemplete/>
*/