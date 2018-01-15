import React from 'react';
import TimePicker from 'material-ui/TimePicker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const TimePickerExampleStep = () => (
  <MuiThemeProvider>
  <div>
    <TimePicker
      hintText="5 minutes step"
      minutesStep={5}
    />
    <TimePicker
      hintText="10 minutes step"
      minutesStep={10}
    />
  </div>
  </MuiThemeProvider>
);

export default TimePickerExampleStep;