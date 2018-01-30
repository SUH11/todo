import React from 'react';
import Greeting from './Greeting';

export default class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true
    };
  }

  handleLogoutClick= () => {
    this.state = {
      isLoggedIn: false
    }
  };

  handleLoginClick = () => {
    this.state = {
      isLoggedIn: true
    }
  };

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button = null;
    if ( isLoggedIn ) {
      button = <LogoutButton onClick={this.handleLogoutClick} />
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn}/>
        {button}
        <div>The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.</div>
      </div>
    );
  }
}

class LogoutButton extends React.Component {
  render() {
    return <h1>11111Welcome back!</h1>;
  }
}

class LoginButton extends React.Component {
  render() {
    return <h1>2222Please sign up.</h1>;
  }
}
