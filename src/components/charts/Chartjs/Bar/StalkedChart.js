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
      data: [45, 45, 45, 45, 45, 45, 45],
    },
    {
      label: "Dataset 2",
      backgroundColor: "#82ca9d",
      borderColor: "#82ca9d",
      fillOpacity: 0.6,
      data: [45, 45, 45, 45, 45, 45, 45],
    },
    {
      label: "Dataset 3",
      backgroundColor: "green",
      data: [45, 45, 45, 45, 45, 45, 45],
    },
  ],
};

const chartOptions = {
  title: {
    display: true,
    text: "Chart.js Bar Chart - Stacked",
  },
  tooltips: {
    mode: "index",
    intersect: false,
  },
  responsive: true,
  scales: {
    xAxes: [
      {
        stacked: true,
      },
    ],
    yAxes: [
      {
        stacked: true,
      },
    ],
  },
};

export default class extends Component {
  render() {
    return (
      <Card title="Stalked Bar Chart">
        <Bar data={chartData} options={chartOptions} />
      </Card>
    );
  }
}
