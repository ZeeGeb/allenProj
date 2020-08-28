import React, { Component } from 'react';
import {get, post} from '../connection';

class addProject extends Component {
    constructor(props) {
		super(props);
		this.state = {projname: "", response: "nothing yet"};
		this.handleChangeProj = this.handleChangeProj.bind(this);
		this.submit = this.submit.bind(this);
	}
    render() {
		/*<label for="dependantproj">Dependenancies:</label>
				<input type="text" id="dependantproj" name="dependantproj"/><br></br>
				*/
        return (
            <>
                <label for="projname">Project Name</label>
                <input type="text" id="projname" name="projname" 
			value={this.state.projname} onChange={this.handleChangeProj}/><br></br>
            	<button onClick={this.submit}>Submit</button>
				<p>{this.state.response}</p>
			</>
        )
    }

	submit() {
		post("project/create", ["name"], [this.state.projname]).then(resp => {
			console.log(resp);
			this.setState({response: "Received"});
		});
	}

	handleChangeProj(event) {
		this.setState({projname: event.target.value});
	}
}
export default addProject;
