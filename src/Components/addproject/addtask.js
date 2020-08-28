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
                <input type="text" id="taskname" name="taskname" value={this.state.taskname} onChange={this.handleChangeTask}/><br></br>
                <label for="personincharge">Responsible Person</label>
                <input type="text" id="personincharge" name="personincharge" value={this.state.personincharge} onChange={this.handleChangeTask}/><br></br>
                <label for="packagemanger">Package Manger</label>
                <input type="text" id="packagemanger" name="packagemanger" value={this.state.packagemanger} onChange={this.handleChangeTask}/><br></br>
                <label for="startdate">Start Date</label>
                <input type="text" id="startdate" name="startdate" value={this.state.startdate} onChange={this.handleChangeTask}/><br></br>
            	<label for="duration">Duration</label>
                <input type="text" id="duration" name="duration" value={this.state.duration} onChange={this.handleChangeTask}/><br></br>
                <label for="enddate">End Date</label>
                <input type="text" id="enddate" name="enddate" value={this.state.enddate} onChange={this.handleChangeTask}/><br></br>
                <label for="tastresources">Task Resources</label>
                <input type="text" id="taskresources" name="taskresources" value={this.state.taskresources} onChange={this.handleChangeTask}/><br></br>
                <label for="taskprogress">Task progress</label>
                <input type="text" id="taskprogress" name="taskprogress" value={this.state.taskprogress} onChange={this.handleChangeTask}/><br></br>
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
