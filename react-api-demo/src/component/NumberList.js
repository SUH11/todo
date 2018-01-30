import React from 'react';

export default class NumberList extends React.Component {
  render() {
    const listItem = this.props.numbers.map((number) =>
      <li key={number.toString()}>{number}</li>
    );
    return (
      <ul>{listItem}</ul>
    );
  }
}