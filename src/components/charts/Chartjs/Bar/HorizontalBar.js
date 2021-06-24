/* eslint-disable import/no-anonymous-default-export */
import React, { Component } from "react";
import { Card } from "antd";
import { Bar } from "react-chartjs-2";

const chartData = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Dataset 1",
      backgroundColor: "#8884d8",
      borderColor: "#8884d8",
      fillOpacity: 0.6,
      borderWidth: 1,
      data: [34, 84, 94, 45, 44, 74, 44],
    },
    {
      label: "Dataset 2",
      backgroundColor: "#82ca9d",
      borderColor: "#82ca9d",
      fillOpacity: 0.6,
      data: [38, 24, 30, 44, 64, 54, 74],
    },
  ],
};

const chartOptions = {
  // Elements options apply to all of the options unless overridden in a dataset
  // In this case, we are setting the border of each horizontal bar to be 2px wide
  elements: {
    rectangle: {
      borderWidth: 2,
    },
  },
  responsive: true,
  legend: {
    position: "right",
  },
  title: {
    display: true,
    text: "Chart.js Horizontal Bar Chart",
  },
};

export default class extends Component {
  render() {
    return (
      <Card title="Horizontal Bar Chart">
        <Bar data={chartData} options={chartOptions} />
      </Card>
    );
  }
}
