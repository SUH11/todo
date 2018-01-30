import React from 'react';

export default class Mailbox extends React.Component {
  render() {
    return (
      <div>
        <h1>React.....{this.props.unreadmessages}</h1>
        {this.props.unreadMessages > 0 && <h2>You have {this.props.unreadMessages} unread message.</h2>}
      </div>
    );
  }
}