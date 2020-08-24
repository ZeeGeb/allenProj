import React, { Component } from 'react';
import './draw.css';

class Task extends Component {
	render() {
		return (
			<foreignObject x={this.props.x} y={this.props.y}
				width={this.props.width} height={this.props.height}>
				<div className="task" style={{width: (this.props.width-22)+"px", height: (this.props.height-22)+"px"}}>
					Hello {this.props.name}
				</div>
			</foreignObject>
		);
	}
}

export default Task;
