import React, { Component } from 'react';
import Task from './task';
import Connector from './connector';

class Engine extends Component {
	size = 0;
	
	constructor(props) {
		super(props);
		this.state = {tasks: ["task1", "task2", "task3"]}
	}

	render() {
		let rows = [];
		for (var task of this.state.tasks) {
			let pos = this.getTaskPos();
			rows.push(
				<>
				<Connector x1="10" y1="10" x2={pos[0]} y2={pos[1] + 35/2}/>
				<Task x={pos[0]} y={pos[1]} width="200" height="35" name={task}/>
				</>
			);
		}
		return (
			<svg width="500" height="500">
				{rows}
				Please use a browser that supports inline SVG.
			</svg>
		);
	}

	getTaskPos() {
		return [60, (++this.size)*60];
	}

}

export default Engine;
