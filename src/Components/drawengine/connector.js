import React, { Component } from 'react';

class Connector extends Component {
	render() {
		return (
			<path d={this.drawString()} stroke="black" fill="none" strokeWidth="2"/>
		);
	}

	drawString() {
		let x1 = this.props.x1;
		let y1 = this.props.y1;
		let x2 = this.props.x2;
		let y2 = this.props.y2;
		
		return "M " + x1 + " " + y1 + " C " + x1 + " " + y2  + " " + x1 + " " +
			y2 + " " + x2 + " " + y2;
	}
}

export default Connector;
