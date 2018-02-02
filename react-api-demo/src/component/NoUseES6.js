var createReactClass = require('create-react-class');

var Greeting = createReactClass({
  getDefaultProps: function() {
    return {
      name: 'suhong'
    }
  },
  getInitialState: function() {
    return {
        count: this.props.initialCount
    };
  },
  render: function() {
    return <h1>Hell0oooo, {this.props.name}.</h1>
  }
});

var SayHello = createReactClass({
  getInitialState: function() {
    return {message: 'Hello!'};
  },

  handleClick: function() {
    alert(this.state.message);
  },

  render: function() {
    return (
      <button onClick={this.handleClick}>
          Say hello
      </button>
    );
  }
});
