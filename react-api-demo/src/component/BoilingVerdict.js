import React from 'react';

export default class BoilingVerdict extends React.Component {
  render() {
    if (this.props.celsius >= 100) {
      return <p>水会烧开</p>;
    }
    return <p>水不会烧开</p>;
  }
}