/* eslint-disable import/no-anonymous-default-export */
import React, { Component } from "react";
import { Card } from "antd";
import { Line } from "react-chartjs-2";

const chartData = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "My First dataset",
      fill: false,
      backgroundColor: "#8884d8",
      borderColor: "#8884d8",
      fillOpacity: 0.6,
      data: [56, 46, 56, 58, 36, 55, 26],
    },
    {
      label: "My Second dataset ",
      fill: false,
      backgroundColor: "#82ca9d",
      borderColor: "#82ca9d",
      fillOpacity: 0.6,
      data: [46, 51, 56, 76, 56, 36, 86],
    },
  ],
};

const chartOptions = {
  title: {
    display: true,
    text: "Chart.js Line Chart - Animation Progress Bar",
  },
  animation: {
    duration: 2000,
  },
};

export default class extends Component {
  render() {
    return (
      <Card title="Progress Bar Chart">
        <Line data={chartData} options={chartOptions} />
        <progress id="animationProgress" max="1" value="1" />
      </Card>
    );
  }
}
