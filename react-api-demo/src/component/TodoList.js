import React from 'react';
import PropTypes from 'prop-types';

export default class TodoList extends React.Component {
  render() {
    const todos = ['finish doc', 'submit pr', 'nag dan to review'];
    return (
      <ul>
        {todos.map((item, index) => {
          return <Item key={index} message={item}/>
        })}
      </ul>
    );
  }
}


class Item extends React.Component {
  render() {
    const children = this.props.children;
    return <li>{this.props.message} {String(false)}  {children}</li>;
  }
}
Item.PropTypes = {
  message: PropTypes.string,
  optionalUnion: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  // 指定只传递一个子代
  children: PropTypes.element.isRequired
};

// Item.defaultProps = {
//   name: '-default name-'
// };
