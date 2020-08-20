import React, { Component } from 'react';
import {get, post} from './connection';

class Test extends Component {
	constructor(props) {
		super(props);
		this.state = {response: "Hi"};
		get("url").then(resp => {
			this.setState({response: resp});
		});
	}
	
	render() {
		return (
			<h1>{this.state.response}</h1>
		);
	}
}

export default Test;
