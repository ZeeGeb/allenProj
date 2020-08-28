import React, { Component } from 'react';
import {get, post} from '../connection';

class addTask extends Component {
    constructor(props) {
		super(props);
		this.state = {taskname: "", response: "nothing yet"};
		this.handleChangeTask = this.handleChangeProj.bind(this);
		this.submit = this.submit.bind(this);
	}
    render() {
		/*<label for="dependantproj">Dependenancies:</label>
				<input type="text" id="dependantproj" name="dependantproj"/><br></br>
				*/
        return (
            <>
                <label for="taskname">Task Name</label>
                <input type="text" id="taskname" name="taskname" value={this.state.projname} onChange={this.handleChangeTask}/><br></br>
                <label for="personincharge">Responsible Person</label>
            	<button onClick={this.submit}>Submit</button>
				<p>{this.state.response}</p>
			</>
        )
    }

	submit() {
		post("", ["name"], [this.state.taskname]).then(resp => {
			console.log(resp);
			this.setState({response: "Received"});
		});
	}

	handleChangeTask(event) {
		this.setState({taskname: event.target.value});
	}
}
export default addProject;
