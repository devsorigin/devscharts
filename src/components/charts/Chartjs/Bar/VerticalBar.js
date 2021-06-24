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
      data: [45, 85, 43, 25, 46, 5, 75],
    },
    {
      label: "Dataset 2",
      backgroundColor: "#82ca9d",
      borderColor: "#82ca9d",
      fillOpacity: 0.6,
      borderWidth: 1,
      data: [12, 92, 42, 18, 32, 62, 1],
    },
  ],
};

const chartOptions = {
  responsive: true,
  legend: {
    position: "top",
  },
  title: {
    display: true,
    text: "Chart.js Bar Chart",
  },
};

export default class extends Component {
  render() {
    return (
      <Card title="Vertical Bar Chart">
        <Bar data={chartData} options={chartOptions} />
      </Card>
    );
  }
}
