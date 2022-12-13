import React, { Component } from 'react';

class Slider extends Component {
    state = {  }

    handleSliderChange = () => {
        console.log(this);
        this.props.onInput(this.value);
    }

    render() { 
        return (
            <>
                <h2>{this.props.children}</h2>
                <input
                    step={this.props.step}
                    type={'range'}
                    min={this.props.min}
                    max={this.props.max}
                    value={this.props.value}
                    onChange={(e) => {this.props.onChange(e.target.value, this.props.name)}}
                />
            </>
        );
    }
}
 
export default Slider;