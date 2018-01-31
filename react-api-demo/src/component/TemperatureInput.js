import React from 'react';

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};
export default class TemperatureInput extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      temperature: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(ev) {
    this.props.onTemperatureChange(ev.target.value);
  }
  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature}
               onChange={this.handleChange} />
      </fieldset>
    );
  }
}