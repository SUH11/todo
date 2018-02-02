var SetIntervalMixin = {
  componentWillMount: function() {
    this.intervals = [];
  },
  setInterval: function() {
    this.intervals.push(setInterval.apply(null, arguments));
  },
  componentWillUnmount: function() {
    this.intervals.forEach(clearInterval);
  }
};

var createReactClass = require('create-react-class');
var React = require('react');
var ReactDOM = require('react-dom');

var TickTock = createReactClass({
  mixins: [SetIntervalMixin],
  getInitialState: function() {
    return {
      seconds: 0
    };
  },
  componentDidMount: function() {
    this.setInterval(this.tick, 1000)
  },
  tick: function() {
    this.setState({
      seconds: this.state.seconds + 1
    });
  },
  render: function() {
    return (
      <p>
        React has been running for {this.state.seconds} seconds.
      </p>
    );
  }
});

ReactDOM.render(
  <TickTock />,
  document.getElementById('example')
);
