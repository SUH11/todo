import React from 'react';

export default class Welcome extends React.Component {
  render() {
    return <span>Hello, {this.props.name}</span>;
  }
}