import React, { Component, createRef } from 'react';
import ReactDOM from 'react-dom';
import Todo from './components/todo';
import Footer from './components/footer';

import './main.css';

class TodoList extends Component{

  constructor(props){
      super(props);
      this.state = {
        todoList: [],
        view: 'all'
      };
      this.todoInput = createRef();
  }

  addTodo = (event) => {
    console.log('1111');
    let { value } = this.todoInput.current;

    if ( event.keyCode !== 13 || !value ) {
      return;
    }

    let { todoList } = this.state;


    this.setState({
      todoList: [
        { 
          id: Math.random(), 
          content: value,
          hasCompleted: false
        },
        ...todoList
      ]
    });

    this.todoInput.current.value = '';


  }

  deleteTodo = (id) => {
    let { todoList } = this.state;

    todoList = todoList.filter(elt => {
      return elt.id !== id;
    });

    this.setState({
      todoList
    });

  }

  toggleTodo = (id) => {
    let { todoList } = this.state;

    todoList = todoList.map(elt => {
      if ( elt.id === id ) {
        elt.hasCompleted = !elt.hasCompleted;
      }
      return elt;
    });

    this.setState({
      todoList
    });

  }

  toggleAll = (event) => {
    let { todoList } = this.state;

    todoList = todoList.map(elt => {
      elt.hasCompleted = event.target.checked;
      return elt;
    });

    this.setState({
      todoList
    });

  }

  alterTodoList = (id, content) => {
    let { todoList } = this.state;

    todoList = todoList.map(elt => {
      if ( elt.id === id ) elt.content = content;
      return elt;
    });

    this.setState({
      todoList
    });
  }

  changeView = (status) => {
    console.log('status', status);
    this.setState({ view: status});
  }

  clearCompleted = () => {
    let { todoList } = this.state;
    todoList = todoList.filter(elt => {
      return !elt.hasCompleted;
    });
    this.setState({
      todoList
    });
  }

  render(){
    let { todoList, view } = this.state;
    let leftItem = 0;

    const hasCompletedTodo = todoList.filter(elt => {
      if ( !elt.hasCompleted ) leftItem++;
      switch(view) {
        case 'active':
          return !elt.hasCompleted;
        case 'completed':
          return elt.hasCompleted;
        case 'all':
        default: 
          return true;
      }
    });

    let todo = hasCompletedTodo.map(elt => {
      return (
        <Todo 
          key={elt.id}
          {...{
            content: elt.content,
            id: elt.id,
            deleteTodo: this.deleteTodo,
            hasCompleted: elt.hasCompleted,
            toggleTodo: this.toggleTodo,
            alterTodoList: this.alterTodoList
          }}
        />
      );
    });

    let active = !todoList.find(elt => elt.hasCompleted === false);

    return (
      <div>
        <header className="header">
          <h1>todos</h1>
          {/* 输入框 */}
          <input
            type="text"
            className="new-todo"
            ref={this.todoInput}
            placeholder="type something here"
            onKeyDown={this.addTodo}
          />
        </header>
        <section className="main">
        {/* 全选按钮 */}
        <input
          type="checkbox"
          className="toggle-all"
          checked={active && todoList.length > 0}
          onChange={this.toggleAll}
        />
        <ul className="todo-list">
          { todo }
        </ul>
      </section>
      <Footer 
        view={view}
        changeView={this.changeView}
        leftItem={leftItem}
        clearCompleted={this.clearCompleted}
      />
      </div>
    )
  }
}


ReactDOM.render(
  <TodoList/>
  ,
  document.getElementById('root')
)
