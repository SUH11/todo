import React, { Component } from 'react';

export default class Todo extends Component {
  // 挂载点
  constructor(props) {
    super(props);
    this.state = {
      inEdit: true
    };
    this.editInput = React.createRef();
  }

  // 失去焦点 回车 ==>为保存

  onEdit = () => {
    this.setState({
      inEdit: true
    }, () => {
      const input = this.editInput.current;
      input.focus();
      input.value = this.props.content;
    });
  }

  onBlur = () => {
    this.setState({
      inEdit: false
    });
    this.commitAtler();
  }

  onKeyDown = (event) => {

    // 这里又一些小问题，未修复
    console.log('event.keyCode:', event.keyCode);
    if ( event.keyCode === 13 ) {
      this.setState({
        inEdit: false
      });
      this.commitAtler();
    } else if ( event.keyCode === 27 ) {
      this.setState({
        inEdit: false
      });
    }
  }

  commitAtler = () => {
    const { current: input } = this.editInput;
    const content = input.value.trim();
    const { id } = this.props;

    content ? this.props.alterTodoList(id, input.value) : this.props.deleteTodo(id);

    input.value = '';
    
  }

  render() {
    let { content, id, deleteTodo, hasCompleted, toggleTodo } = this.props;
    const { inEdit } = this.state;

    let className = inEdit ? 'editing' : '';
    className = hasCompleted ? className + ' completed' : '';

    return (
      <li
            // className="completed"
            // className="editing"
            className={className}
          >
            <div className="view">
              {/* 勾选按钮 */}
              <input
                type="checkbox"
                className="toggle"
                checked={hasCompleted}
                onChange={()=>toggleTodo(id)}
              />
              {/* todo 的内容 */}
              <label 
                ref="label"
                onDoubleClick={this.onEdit}
              >
                { content }
              </label>
              {/* 删除按钮 */}
              <button
                className="destroy"
                ref="btn"
                onClick={()=>deleteTodo(id)}
              ></button>
            </div>
            {/* 编辑 todo 的输入框 */}
            <input
              type="text"
              className="edit"
              ref={this.editInput}
              onBlur={this.onBlur}
              onKeyDown={this.onKeyDown}
            />
      </li>
    );
  }
}