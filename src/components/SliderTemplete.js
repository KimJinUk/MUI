import React, {Component} from 'react';
import Slider from 'material-ui/Slider';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


export default class SliderExampleControlled extends Component {
  constructor(props) {
  	super(props);
	this.state = {
	    firstSlider: 0.5,
	    secondSlider: 50,
	};

	this.handleFirstSlider=this.handleFirstSlider.bind(this);
	this.handleSecondSlider=this.handleSecondSlider.bind(this);
  }

  handleFirstSlider(event, value) {
    this.setState({firstSlider: value});
  };

  handleSecondSlider(event, value) {
    this.setState({secondSlider: value});
  };

  render() {
    return (
    <MuiThemeProvider>
      <div>
        <Slider value={this.state.firstSlider} onChange={this.handleFirstSlider} />
        <p>
          <span>{'The value of this slider is: '}</span>
          <span>{this.state.firstSlider}</span>
          <span>{' from a range of 0 to 1 inclusive'}</span>
        </p>
        <Slider
          min={0}
          max={100}
          step={5}
          value={this.state.secondSlider}
          onChange={this.handleSecondSlider}
        />
        <p>
          <span>{'The value of this slider is: '}</span>
          <span>{this.state.secondSlider}</span>
          <span>{' from a range of 0 to 100 inclusive'}</span>
        </p>
      </div>
    </MuiThemeProvider>  
    );
  }
}