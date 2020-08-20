import {Component, React} from 'react';
import ReactDOM from 'react-dom';

/**
 * Task component holding all info related to a task.
 * Props:
 * tname: Task name
 * tID: Task ID
 * resp: Responsible person
 * packman: package manager
 * start: Start date
 * end: End date
 * dur: Duration
 * resrc: Task resources
 * progr: Task progress
 */
class Task extends Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<div>
				<h3>{this.props.tname}</h3>
				<p>ID: {this.props.tID}</p>
				<p>Responsible person: {this.props.resp}</p>
				<p>Package manager: {this.props.packman}</p>
				<p>Start date: {this.props.start}</p>
				<p>End date: {this.props.end}</p>
				<p>Duration: {this.props.dur}</p>
				<p>Resources: {this.props.resrc}</p>
				<p>Task progress: {this.props.progr}</p>
			</div>
		);
	}
}

export default Task;
