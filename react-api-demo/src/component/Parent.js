import React from 'react';
import CustomTextInput from "./CustomTextInput";

class CustomTextInput extends React.Component {
  render() {
    return (
      <div>
        <input ref={this.props.inputRef} />
      </div>
    );
  }
}

class Parent extends React.Component {
  render() {
    return (
      <div>
        My input: <CustomTextInput inputRef={this.props.inputRef} />
      </div>
    );
  }
}


export default class Grandparent extends React.Component {
  render() {
    return (
      <Parent
        inputRef={el => this.inputElement = el}
      />
    );
  }
}