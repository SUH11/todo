import React from 'react';

class UserGreeting extends React.Component {
  render() {
    return <h1>Welcome back!</h1>;
  }
}

class GuestGreeting extends React.Component {
  render() {
    return <h1>Please sign up.</h1>;
  }
}

export default class Greeting extends React.Component {
  render() {
    if ( this.props.isLoggedIn ) {
      return <UserGreeting />;
    }
    return <GuestGreeting />;
  }
}