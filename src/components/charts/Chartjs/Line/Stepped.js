/* eslint-disable import/no-anonymous-default-export */
import React, { Component } from "react";
import { Card } from "antd";
import { Line } from "react-chartjs-2";

const chartData = {
  labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6"],
  datasets: [
    {
      label: "steppedLine: " + true,
      steppedLine: true,
      data: [45, 34, 65, 3, 54, 65],
      backgroundColor: "#8884d8",
      borderColor: "#8884d8",
      fillOpacity: 0.6,
      fill: false,
    },
  ],
};

const chartOptions = {
  responsive: true,
  title: {
    display: true,
    text: "Step Before Interpolation",
  },
};

export default class extends Component {
  render() {
    return (
      <Card title="Stepped Line Chart">
        <Line data={chartData} options={chartOptions} />
      </Card>
    );
  }
}
