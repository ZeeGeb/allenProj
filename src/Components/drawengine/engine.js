import React, { Component } from 'react';

class Engine extends Component {
	render() {
		return (
			<svg width="500" height="500">
				<path d="M 10 10 C 10 85 35 85 60 85" stroke="black" fill="none" stroke-width="2"/>
				<foreignObject x="60" y="60" width="200" height="200">
				<div>
				<p id="task">
					Hello
				</p>
				</div>
				</foreignObject>
				Please use a browser that supports inline SVG.
			</svg>
		);
	}
}

export default Engine;
