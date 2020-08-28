import React, { Component,useState } from 'react';
import {select,json,tree,hierarchy,linkVertical,zoom,event} from 'd3';
import Treefunction from "./treefunction";
import {get} from '../connection';


const initialData = {
  name: "Task1",
  children: [
    {
      name: "Task1a",
      children: [
        {
          name: "Task1b",
        },
        {
          name: "Task1c",
        },
        {
          name: "Task1d",
        }
      ]
    },
    {
      name: "Task2",
    }
  ]
};
const initialData2 = {
  name: "Task1",
  children: [
    {
      name: "Task1a",
      children: [
        {
          name: "Task1b",
        },
        {
          name: "Task1c",
        }
      ]
    }
  ]
};

class Check extends Component {
	constructor(props) {
		super(props);
		this.state = {data: initialData};
		get("dummy/project").then((res) => {
			this.setState({data: res});
		});
	}

	render() {
		return (
			<React.Fragment>
			<h1>Projects</h1>
			<Treefunction svg data={this.state.data} />
			<button onClick={() => this.setState({data: initialData2})}>
			Add Project
			</button >
			</React.Fragment>
		);
	}
}
  
/*
function Check() {
  const [data, setData] = useState(initialData);
  
  console.log("Getting data");
  get("dummy/project").then((res) => {
	setData(res);
  });
	  return (
		  <React.Fragment>
		  <h1>Projects</h1>
		  <Treefunction svg data={data} />
		  <button onClick={() => setData(initialData2)}>
		  Add Project
		  </button >
		  </React.Fragment>
	  );

}*/

export default Check;
