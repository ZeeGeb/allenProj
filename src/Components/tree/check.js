import React, { Component,useState } from 'react';
import {select,json,tree,hierarchy,linkVertical,zoom,event} from 'd3';
import Treefunction from "./treefunction";


const initialData = {
  name: "Task1",
  children: [
    {
      name: "Task1a",
      children: [
        {
          name: "Task1b"
        },
        {
          name: "Task1c"
        },
        {
          name: "Task1d"
        }
      ]
    },
    {
      name: "Task2"
    }
  ]
};

  
function Check() {
  const data = useState(initialData);

  return (
    <React.Fragment>
      <h1>Projects</h1>
      <Treefunction svg data={initialData} />
      <button >
        Add Project
      </button>
    </React.Fragment>
  );
}

export default Check;