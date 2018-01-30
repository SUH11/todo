import React from 'react';

export default class Warn extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showWarning: false
    };
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(prevState => ({
      showWarning: !prevState.showWarning
    }));
  }

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide' : 'Show'}
        </button>
      </div>
    );
  }

}

class WarningBanner extends React.Component {
  render() {
    return (
      <div className="warning">
        Warning!
      </div>
    );
  }

}