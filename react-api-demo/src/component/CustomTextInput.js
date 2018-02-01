import React from 'react';

export default class CustomTextInput extends React.Component {
  constructor() {
    super(...arguments);
    this.focus = this.focus.bind(this);
  }
  focus() {
    this.textInput.focus();
  }
  render() {
    return (
      <div>
        <input type="text" ref={(input) => { this.textInput = input; }}/>
        <input type="button" value="Focus the text input" onClick={this.focus}/>
      </div>
    );
  }
}