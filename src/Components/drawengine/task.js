import React, { Component } from 'react';
import './draw.css';

class Task extends Component {
	isExpanded = false;

	constructor(props) {
		super(props);

		this.state = {
			x: this.props.x,
			y: this.props.y,
			width: this.props.width,
			height: this.props.height
		};
	}

	render() {
		return (
			<foreignObject x={this.state.x} y={this.state.y}
				width={this.state.width} height={this.state.height}>
				<div className="task" style={{width: (this.state.width-22)+"px", 
				height: (this.state.height-22)+"px"}}
				onClick={this.expand.bind(this)}>
					Hello {this.props.name}
				</div>
			</foreignObject>
		);
	}

	expand = () => {
		this.setState((state, props) => ({
			height: (this.isExpanded) ? state.height*2 : state.height/2
		}), () => {
			console.log(this.state.height);
		});
		this.isExpanded = !this.isExpanded;
	}

	static componentDidUpdate() {
		this.setState({
			x: this.props.x,
			y: this.props.y,
			width: this.props.width,
			height: this.props.height
		});
	}
}

export default Task;
