import React from "react";
import { Bar } from "react-chartjs-2";

export default class HeatMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props);
    let labels = [];
    for (let i = 1; i <= 52; i++) {
      labels.push(`week ${i}`);
    }
    let data = {
      labels: labels,
      datasets: [
        {
          label: "heatmap",
          backgroundColor: "rgb(255, 99, 132)",
          borderColor: "rgb(255, 99, 132)",
          data: this.props.data
        }
      ]
    };
    return <Bar data={data} />;
  }
}
