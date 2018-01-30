import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import Main from './main';

class App extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      data: [
        {
          title: '告白气球',
          singer: '周杰伦',
          selected: false,
          like: false
        },
        {
          title: '告白气球2',
          singer: '周杰伦2',
          selected: false,
          like: false
        },
        {
          title: '告白气球3',
          singer: '周杰伦3',
          selected: false,
          like: false
        },
        {
          title: '告白气球4',
          singer: '周杰伦4',
          selected: false,
          like: false
        }
      ]
    };
  }
  render() {
    return (
      <div className="App">
        <div id="musicApp">
        	<Header />
        	<Main />
        	<Footer />
        </div>
      </div>
    );index.css
  }
}

export default App;
