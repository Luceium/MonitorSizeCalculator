import React, { Component } from 'react';
import './App.css';
import Slider from './components/Slider';

class App extends Component {
  state = {
    'height' : 7.65,
    'angle': 0,
    'size': 15.6
  }

  handleSliderChange = (val, name) => {
    this.updateSlider(val, name);
    this.calculate();
  }

  updateSlider(val, name) {
    this.setState({ [name] : val});
  }

  render() { 
    return (
      <div className="App">
        <h1>Screen size buyer guide</h1>
        <Slider name={'angle'} min={0} max={Math.PI / 2} value={this.state.angle} step={0.00001} onChange={this.handleSliderChange}>Angle  ~ {(this.state.angle * (180 / Math.PI)).toFixed(0)}</Slider>
        <Slider name={'size'} min={0} max={40} value={this.state.size} step={0.1} onChange={this.handleSliderChange}>Size ~ {(this.state.size)}</Slider>
        <h2>The vertical height is: {(this.state.height).toFixed(2)}</h2>
      </div>
    );
  }

  calculate(){
    console.log("input detected");
    const xRatio = 16;
    const yRatio = 9;

    let screenHeight = yRatio * Math.sqrt(Math.pow(this.state.size, 2) / (Math.pow(xRatio, 2) + Math.pow(yRatio, 2)));
    let heightAfterTilt = screenHeight * Math.cos(this.state.angle);
    this.setState({'height': heightAfterTilt});
  }
}

export default App;
