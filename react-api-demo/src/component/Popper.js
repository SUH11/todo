import React from 'react';

export default class Popper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Hello Popper Popper!!!!!!'
    };
  }

  preventPop(name, e) {
    e.preventDefault();
    alert(name);
  }

  render() {
    return (
      <div>
        <p>Hello Popper.</p>
        <a href="http:www.baidu.com" onClick={this.preventPop.bind(this, this.state.name)}>Click</a>
      </div>

    );
  }
}