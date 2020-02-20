import React from "react";
import * as d3 from "d3";

export default class HeatMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const temperatureData = [8, 5, 13, 9, 12];
    d3.select(this.refs.heatmap)
      .selectAll("h2")
      .data(temperatureData)
      .enter()
      .append("h2")
      .text("New Temperature");
    return <div ref="heatmap"></div>;
  }
}
