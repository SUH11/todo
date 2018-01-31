import React from 'react';

//通过export方式导出，在导入时要加{ }，export default则不需要
export class NumberList extends React.Component {
  render() {
    const listItem = this.props.numbers.map((number) =>
      <ListItem key={number.toString()} value={number} />
    );
    return (
      <ul>{listItem}</ul>
    );
  }
}

export class ListItem extends  React.Component {
  render() {
    return (
      <li>{this.props.value}</li>
    );
  }
}
