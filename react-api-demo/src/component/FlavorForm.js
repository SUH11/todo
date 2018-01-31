import React from 'react';

export default class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'account'
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(ev) {
    this.setState({
      value: ev.target.value.toUpperCase()
    });
  }
  handleSubmit(ev) {
    ev.preventDefault();
    console.log('Your favorite flavor is: ', this.state.value);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          pick your favorite :
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="A">a</option>
            <option value="B">b</option>
            <option value="C">c</option>
          </select>
        </label>
        <input type="submit" value="Submit"/>
      </form>
    );
  }
}