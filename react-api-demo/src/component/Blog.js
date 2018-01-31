import React from 'react';

export default class Blog extends React.Component {
  render() {
    const sidebar = (
      <ul>
        {this.props.posts.map(post =>
          <li key={post.id}>{post.title}</li>
        )}
      </ul>
    );
    // key会作为给React的提示，但不会传递给你的组件
    const content = this.props.posts.map(post=> (
      <div key={post.id} id={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
      </div>
    ));
    return (
      <div>
        {sidebar}<hr/>
        {content}
      </div>
    );
  }
}