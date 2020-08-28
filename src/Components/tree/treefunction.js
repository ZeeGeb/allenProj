import React, { useRef, useEffect } from "react";
import { select, drag, hierarchy, tree, linkHorizontal, linkVertical, zoom, event } from "d3";
import '../drawengine/draw.css';

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

function Treefunction({ data }) {
  const svgRef = useRef();
  const wrapperRef = useRef();

  // we save data to see if it changed
  const previouslyRenderedData = usePrevious(data);

  const firstRender = useRef(true);
  // will be called initially and on every data change
  useEffect(() => {
    const svg = select(svgRef.current);
    const root = hierarchy(data);

	const nodes = root.descendants().reverse();
	console.log(nodes);

	const height = document.body.clientWidth;
    const width = document.body.clientWidth;
	
	const zoomfactor = 2;
	const paneh = height/(zoomfactor);
	const panew = width/(zoomfactor);

    const margin = { top: 0, right: 50, bottom: 0, left: 75};
    const innerWidth = panew - margin.left - margin.right;
    const innerHeight = paneh - margin.top - margin.bottom;

    const treeLayout = tree().size([innerHeight, innerWidth]);

    /*const zoomG = svg
        .attr('width', width)
        .attr('height', height)
    .append('g');

    const g = zoomG.append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);

    svg.call(zoom().on('zoom', () => {
        zoomG.attr('transform', event.transform);
    }));*/

    // transform hierarchical data

    const links = treeLayout(root).links();

    var linkGenerator = linkVertical().x(d => d.x).y(d => d.y);

	const link = svg.selectAll('path').data(links)

    const linkEnter = link.enter().append('path')
		  .attr('d',d => {
			  const o = {x: d.x, y: d.y};
			  return linkGenerator({source: o, target: o});
		  });
	link.merge(linkEnter).attr("d", linkGenerator);

	link.exit().remove();

	const c = 100/zoomfactor;
	
	const transition = svg.transition()

	const node = svg.selectAll('foreignObject').data(nodes, d => d.id);

	const nodeEnter = node.enter().append('foreignObject')
	  	  .attr("transform", d => `translate(${d.x - c},${d.y})`)
		  .attr('width',100/(0.5*zoomfactor))
		  .attr('height', 100/(0.5*zoomfactor))
		  .on("click", (d) => {
			alert(d.data.name);
		  })
	const nodeUpdate = node.merge(nodeEnter)
	          .attr("transform", d => `translate(${d.x - c},${d.y})`)
	          .attr("fill-opacity", 1)
	          .attr("stroke-opacity", 1);

	const nodeExit = node.exit()
		  .remove()
		  .transition(transition)
	  	  .attr("transform", d => `translate(${d.x - c},${d.y})`);

	let deltaX, deltaY;
	const dragEvent = drag()
	  .on("start", function () {
		  var current = select(this);
		  deltaX = current.attr("x") - event.x;
		  deltaY = current.attr("y") - event.y;
	  })
	  .on("drag", function (d) {
		  select(this)
			.attr("x", d.x = (event.x+deltaX))
		  	.attr("y", d.y = event.y+deltaY);
	  });

	dragEvent(svg.selectAll("foreignObject"));

    const task = nodeEnter.append('xhtml:div')
	  .attr('class', "task")
	  .text(d => d.data.name);

  }, );

  return (
    <div ref={wrapperRef} style={{ marginBottom: "2rem" }}>
      <svg ref={svgRef}></svg>
    </div>
  );
}

export default Treefunction;
