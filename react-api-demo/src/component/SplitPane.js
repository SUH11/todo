import React from 'react';

export class SplitPane extends React.Component {
  render() {
    return (
      <div className="SplitPane">
        <div className="SplitPane-left">
          {this.props.left}
        </div>
        <div className="SplitPane-right">
          {this.props.right}
        </div>
      </div>
    );
  }
}

export class Contacts extends React.Component {
  render() {
    return <div className="Contacts">Contacts</div>;
  }
}

export class Chat extends React.Component {
  render() {
    return <div className="Chat">Chat</div>;
  }
}