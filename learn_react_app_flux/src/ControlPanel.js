import React, { Component } from 'react';
import Counter from './Counter';

class ContrlPanel extends Component {

	constructor(props) {
		super(props);
		this.onCounterUpdate = this.onCounterUpdate.bind(this);

		this.initValue = [0, 10, 20];
		const initSum = this.initValue.reduce((a, b) => a + b, 0);
		this.state = {
			sum: initSum
		};
	}

	onCounterUpdate(newValue, previousValue) {
		this.setState({
			sum: this.state.sum + newValue - previousValue
		});
	}

	render() {
		console.log('ControlPanel render');
		return (
			<div>
				<Counter caption="First" />
				<Counter caption="Second" />
				<Counter caption="Third" />
				<button onClick={() => this.forceUpdate()}> Click me to repain</button>
				<span>sum: {this.state.sum}</span>
			</div>
		);
	}

}

export default ContrlPanel;