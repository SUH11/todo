import React from 'react';

export default class Toggle extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false
    };
    // 不绑定this，默认是undefined
    // this.handleClick = this.handleClick.bind(this);
  }

  // handleClick() {
  //   this.setState( prevState => ({
  //     isToggleOn: !prevState.isToggleOn
  //   }));
  // }

  // es6，不用bind
  handleClick = () => {
    this.setState( prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  };

  render() {
    return (
      <button onClick={this.handleClick}>
        { this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}