import React from 'react';
import DatePicker from 'material-ui/DatePicker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

/**
 * The Date Picker defaults to a portrait dialog. The `mode` property can be set to `landscape`.
 * You can also disable the Dialog passing `true` to the `disabled` property.
 * To display the year selection first, set the `openToYearSelection` property to `true`.
 */
const DatePickerExampleSimple = () => (
	<div>
		8. DatePicker
		<MuiThemeProvider>
			<div>
				<DatePicker hintText="Portrait Dialog" />
				<DatePicker hintText="Landscape Dialog" mode='landscape' onDismiss={() => {console.log('a')}} />
				<DatePicker hintText="Dialog Disabled" disabled={true} />
				<DatePicker hintText="Open to Year" openToYearSelection={true} />
			</div>
		</MuiThemeProvider>
	</div>
);

export default DatePickerExampleSimple;