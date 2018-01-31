import React, { Component } from 'react';
import './App.css';
import Welcome from './component/Welcome';
import Clock from './component/Clock';
import Toggle from './component/Toggle';
import Popper from './component/Popper';
import Greeting from './component/Greeting';
import LoginControl from './component/LoginControl';
import Mailbox from './component/Mailbox';
import Warn from './component/Warn';
import {NumberList} from './component/NumberList';
import Blog from './component/Blog';
import NameForm from './component/NameForm';
import EssayForm from './component/EssayForm';
import FlavorForm from './component/FlavorForm';
import Reservation from './component/Reservation';

const element = <span tabIndex="0">Hello, element!</span>;

// const elememt2 = React.createElement(
//   'h1',
//   {className: 'greeting'},
//   'Hello createElement'
// );
//
// const element = {
//   type: 'h1',
//   props: {
//     className: 'greeting',
//     children: 'Hello, world'
//   }
// };
//
// const element3 = {
//   type: 'h1',
//   props: {
//     className: 'greeting',
//     children: 'Hello Props'
//   }
// };

class App extends Component {

  render() {
    const messages = ['React', 'Re: React', 'Re:Re: React'];
    const number = [1, 2, 3, 4, 5];
    const double = number.map((number) => number*2);
    console.log(double);

    const listItem = number.map((number, index) =>
      <li key={index}>{number}</li>
    );

    const posts = [
      {id: 1, title: 'Hello huangsuhong', content: 'Welcome to learning React!'},
      {id: 2, title: 'Installation', content: 'You can install React from npm.'}
    ];

    return (
      <div className="App">
        <NumberList numbers={number} />
        <Reservation />
        <FlavorForm />
        <EssayForm />
        <NameForm />
        <Blog posts={posts} />
        <ul>{listItem}</ul>
        <p>Hello React !</p>
        <p>{element}</p>
        <Welcome name="suhong" />
        <Clock />
        <Toggle />
        <Popper/>
        <Greeting isLoggedIn={false} />
        <div>
          LoginControl:
          <LoginControl />
        </div>
        <Mailbox unreadMessages={messages} />
        <Warn />
      </div>
    );
  }
}

export default App;
