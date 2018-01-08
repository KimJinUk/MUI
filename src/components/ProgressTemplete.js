import React from 'react';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const style = {
  container: {
    position: 'relative',
  },
  refresh: {
    display: 'inline-block',
    position: 'relative',
  },
};

export default class CircularProgressExampleDeterminate extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      completed: 0,
    };
  }

  componentDidMount() {
    this.timer = setTimeout(() => this.progress(5), 1000);
    console.log(this)
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  progress(completed) {
    if (completed > 100) {
      this.setState({completed: 100});
    } else {
      this.setState({completed});
      const diff = Math.random() * 10;
      this.timer = setTimeout(() => this.progress(completed + diff), 1000);
    }
  }

  render() {
    return (
      <MuiThemeProvider>
      <div style={style.container}>
        <RefreshIndicator
          percentage={this.state.completed}
          size={50}
          left={10}
          top={10}
          status="ready"
          style={style.refresh}
        />
        <RefreshIndicator
          percentage={60}
          size={50}
          left={65}
          top={0}
          status="ready"
          style={style.refresh}
        />
        <RefreshIndicator
          percentage={80}
          size={60}
          left={120}
          top={0}
          color="red"
          status="ready"
          style={style.refresh}
        />
        <RefreshIndicator
          percentage={100}
          size={70}
          left={175}
          top={0}
          color="red" // Overridden by percentage={100}
          status="ready"
          style={style.refresh}
        />
      </div>
      </MuiThemeProvider>
    );
  }
}