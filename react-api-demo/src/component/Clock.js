import React from 'react';

export default class Clock extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  tick() {
    this.setState((prevState, prop) => {
      return {date: new Date()};
    });
  }
  // 组件渲染完成 已经出现在dom文档里
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  //  组件出现前 就是dom还没有渲染到html文档里面
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}