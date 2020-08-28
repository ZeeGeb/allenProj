import React, { Component } from 'react';
import {get, post} from '../connection';

class addProject extends Component {
    constructor(props) {
		super(props);
		this.state = {response: "Hi"};
		get("url").then(resp => {
			this.setState({response: resp});
		});
	}
    render() {
        return (
            <>
                <label for="projname">Project Name;</label>
                <input type="text" id="projname" name="projname"/><br></br>
                <label for="dependantproj">Dependenancies:</label>
                <input type="text" id="dependantproj" name="dependantproj"/><br></br>
            </>
        )
    }
}
export default addProject;
