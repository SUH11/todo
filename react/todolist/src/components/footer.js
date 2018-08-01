import React, { Component } from 'react';

export default class Footer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { view, changeView, leftItem, clearCompleted } = this.props;
    return (
      <footer className="footer">
        <span className="todo-count">
          <strong> {leftItem} </strong>
          <span>item left</span>
        </span>
        <ul className="filters">
          <li>
            <a
              className={ view === 'all' ? 'selected' : ''}
              onClick={()=>changeView('all')}
            >All</a>

          </li>
          <li>
            <a
              className={ view === 'active' ? 'selected' : ''}
              onClick={()=>changeView('acitve')}
            >Active</a>

          </li>
          <li>
            <a 
            className={ view === 'completed' ? 'selected' : ''}
            onClick={()=>changeView('completed')}
            >Completed</a>

          </li>
        </ul>
        {/* 清除完成按钮 */}
        <button
          className="clear-completed"
          onClick={()=>clearCompleted()}
        >
          clear all completed
        </button>
      </footer>
    );
  }
}
