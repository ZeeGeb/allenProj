import React, { Component } from 'react';
import Task from './task';
import Connector from './connector';

class Engine extends Component {
	size = 0;
	board = [500][500];
	
	constructor(props) {
		super(props);
		this.state = {
			task1: {
				name: "task1",
				x: 60,
				y: 0,
				width: 200,
				height: 35
			},
			task2: {
				name: "task2",
				x: 60,
				y: 0,
				width: 200,
				height: 35
			},
			task3: {
				name: "task3",
				x: 60,
				y: 0,
				width: 200,
				height: 35

			}
		};
	}

	render() {
		let rows = [];
		for (var task of Object.keys(this.state)) {
			this.getTaskPos(task);
			rows.push(
				<>
				<Connector x1="10" y1="10" x2={task.x} y2={task.y + 35/2}/>
				<Task x={task.x} y={task.y} width={task.width} height={task.height} name={task.name}
					onChange={this.changeDim}/>
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

	getTaskPos(task) {
		this.setState({task : {
			y: 60*++this.size
		}});
	}

	changeDim(task, x, y, width, height) {
		
	}

}

export default Engine;
