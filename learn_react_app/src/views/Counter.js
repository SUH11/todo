import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as Actions from '../Action';
import CounterStore from '../stores/CounterStore.js';

class Counter extends Component {

	constructor(props) {
		super(props);
		this.state = {
			count: CounterStore.getCounterValues()[props.caption]
		};
		this.onChange = this.onChange.bind(this);
		this.onClickIncrementButton = this.onClickIncrementButton.bind(this);
		this.onClickDecrementButton = this.onClickDecrementButton.bind(this);
		console.log(`enter component constructor ${this.props.caption}`);
	}

	componentWillMount() {
		console.log(`enter component wil mount ${this.props.caption}`);
	}

	componentDidMount() {
		CounterStore.addChangeListener(this.onChange);
		console.log(`enter component did mount ${this.props.caption}`);
	}

	componentWillReceiveProps(nextProps) {
		console.log(`enter componentWillReceiveProps ${this.props.caption}`);
	}

	shouldComponentUpdate(nextProps, nextState) {
		return (nextProps.caption !== this.props.caption) || (nextState.count !== this.state.count);
	}

	componentWillUnmount() {
		CounterStore.removeChangeListener(this.onChange);
	}

	onChange() {
		const newCount = CounterStore.getCounterValues()[this.props.caption];
		this.setState({
			count: newCount
		});
	}

	updateCount(isIncrement) {
		const previousValue = this.state.count;
		const newValue = isIncrement ? previousValue + 1 : previousValue - 1;
		
		this.setState({
			count: newValue
		});
		this.props.onUpdate(newValue, previousValue);

	}

	onClickIncrementButton() {
		// this.updateCount(true);
		Actions.increment(this.props.caption);
	}

	onClickDecrementButton() {
		// this.updateCount(false);
		Actions.decrement(this.props.caption);
	}

	render() {
		console.log(`${this.props.caption} render`);
		return (
			<div>
				<button onClick={this.onClickIncrementButton}>+</button>
				<button onClick={this.onClickDecrementButton}>-</button>
				<span>{this.props.caption}: {this.state.count}</span>
			</div>
		);
	}

}

Counter.propTypes = {
	caption: PropTypes.string.isRequired,
	initValue: PropTypes.number,
	onUpdate: PropTypes.func
};

Counter.defaultProps = {
	initValue: 0,
	onUpdate: f => f
};

export default Counter;