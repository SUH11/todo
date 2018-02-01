import React from 'react';

export default class WordAdder extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      words: ['marklar']
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    const words = this.state.words;
    words.push('worker');
    this.setState(prevState => ({
      words: prevState.words.concat(['marklar'])
    }));
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>ListOfWords</button>
        <ListOfWords words={this.state.words} />
      </div>
    );
  }
}
// Pure 比对是否一样，浅更新
class ListOfWords extends React.PureComponent {
  render() {
    return <div>{this.props.words.join(',')}</div>;
  }
}
