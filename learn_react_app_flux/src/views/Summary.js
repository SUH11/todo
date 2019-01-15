import React, { Component } from 'react';
import SummaryStore from '../stores/SummaryStore.js';

class Summary extends Component {

	constructor(props) {
		super(props);
		this.state = {
			sum: SummaryStore.getSummary()
		};
		this.onUpdate = this.onUpdate.bind(this);
	}

	componentDidMount() {
		SummaryStore.addChangeListener(this.onUpdate);
	}

	componentWillUnMount() {
		SummaryStore.removeChangeListener(this.onUpdate);
	}

	onUpdate() {
		this.setState({
			sum: SummaryStore.getSummary()
		});
	}

	render() {
		return (
			<div>Total count: {this.state.sum}</div>
		);
	}
}

export default Summary;