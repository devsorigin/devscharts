/* eslint-disable import/no-anonymous-default-export */
import React, { Component } from "react";
import { Card } from "antd";
import { Line } from "react-chartjs-2";

const chartData = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "dataset - big points",
      data: [51, 26, 4, 56, 56, 76, 36],
      backgroundColor: "#8884d8",
      borderColor: "#8884d8",
      fillOpacity: 0.6,
      fill: false,
      borderDash: [5, 5],
      pointRadius: 15,
      pointHoverRadius: 10,
    },
    {
      label: "dataset - individual point sizes",
      data: [52, 56, 16, 96, 36, 6, 56],
      backgroundColor: "#82ca9d",
      borderColor: "#82ca9d",
      fillOpacity: 0.6,
      fill: false,
      borderDash: [5, 5],
      pointRadius: [2, 4, 6, 18, 0, 12, 20],
    },
    {
      label: "dataset - large pointHoverRadius",
      data: [86, 56, 46, 58, 56, 16, 26],
      backgroundColor: "green",
      borderColor: "green",
      fill: false,
      pointHoverRadius: 30,
    },
    {
      label: "dataset - large pointHitRadius",
      data: [6, 54, 56, 36, 56, 96, 36],
      backgroundColor: "yellow",
      borderColor: "yellow",
      fill: false,
      pointHitRadius: 20,
    },
  ],
};

const chartOptions = {
  responsive: true,
  legend: {
    position: "bottom",
  },
  hover: {
    mode: "index",
  },
  scales: {
    xAxes: [
      {
        display: true,
        scaleLabel: {
          display: true,
          labelString: "Month",
        },
      },
    ],
    yAxes: [
      {
        display: true,
        scaleLabel: {
          display: true,
          labelString: "Value",
        },
      },
    ],
  },
  title: {
    display: true,
    text: "Chart.js Line Chart - Different point sizes",
  },
};

export default class extends Component {
  render() {
    return (
      <Card title="Point Size Line Chart">
        <Line data={chartData} options={chartOptions} />
      </Card>
    );
  }
}
