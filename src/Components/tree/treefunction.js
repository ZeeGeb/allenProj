import React, { useRef, useEffect } from "react";
import { select, hierarchy, tree, linkHorizontal, linkVertical, zoom, event } from "d3";

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

  // will be called initially and on every data change
  useEffect(() => {
    const svg = select(svgRef.current);
    const width = document.body.clientWidth;
    const height = document.body.clientHeight;

    const margin = { top: 0, right: 50, bottom: 0, left: 75};
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const treeLayout = tree().size([innerHeight, innerWidth]);

    const zoomG = svg
        .attr('width', width)
        .attr('height', height)
    .append('g');

    const g = zoomG.append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);

    svg.call(zoom().on('zoom', () => {
        zoomG.attr('transform', event.transform);
    }));

    

    // transform hierarchical data
    const root = hierarchy(data);
    const links = treeLayout(root).links();

    const linkGenerator = linkHorizontal()
      .x(link => link.y)
      .y(link => link.x);
      
      svg.selectAll('path').data(links).enter()
      .append('path').attr('d',linkGenerator);
      svg.selectAll('text').data(root.descendants())
      .enter().append('text')
        .attr('x', d => d.y)
        .attr('y', d => d.x)
        .attr('dy', '0.32em')
        .attr('text-anchor', d => d.children ? 'middle' : 'start')
        .attr('font-size', d => 3.25 - d.depth + 'em')
        .text(d => d.data.name);

  }, );

  return (
    <div ref={wrapperRef} style={{ marginBottom: "2rem" }}>
      <svg ref={svgRef}></svg>
    </div>
  );
}

export default Treefunction;