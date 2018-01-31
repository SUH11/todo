import React from 'react';
import FancyBorder from './FancyBorder';

export class Dialog extends React.Component {
  render() {
    return (
      <FancyBorder color="blue">
        <h1 className="Dialog-title">
          {this.props.title}
          </h1>
        <p className="Dialog-message">
          {this.props.message}
        </p>
        {this.props.children}
      </FancyBorder>
    );
  }
}

export class SignUpDialog extends  React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      login: true
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
  }
  handleChange(ev) {
    this.setState({
      login: ev.target.value
    });
  }
  handleSignUp() {
    alert(`Welcome aboard, ${this.state.login}!`);
  }
  render() {
    return (
      <Dialog title="Mars Exploration Program"
              message="How should we refer to you?">
        <input value={this.state.login}
               onChange={this.handleChange}/>
        <button onClick={this.handleSignUp}>Sign Me Up!</button>
      </Dialog>
    );
  }
}

export class MessageDialog extends React.Component {
  render() {
    return (
      <Dialog
        title="Welcome"
        message="Thank you for visiting our spacecraft!" />
    );
  }
}