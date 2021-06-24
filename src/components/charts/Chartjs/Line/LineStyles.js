/* eslint-disable import/no-anonymous-default-export */
import React, { Component } from "react";
import { Card } from "antd";
import { Line } from "react-chartjs-2";

const chartData = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      label: "Unfilled",
      fill: false,
      backgroundColor: "#ff0fac",
      borderColor: "#ff0fac",
      fillOpacity: 0.6,
      data: [180, 120, 125, 105, 110, 170],
    },
    {
      label: "Dashed",
      fill: false,
      backgroundColor: "green",
      borderColor: "green",
      borderDash: [5, 5],
      data: [180, 10, 25, 155, 108, 70],
    },
    {
      label: "Filled",
      backgroundColor: "#8884d8",
      borderColor: "#8884d8",
      fillOpacity: 0.6,
      data: [80, 82, 52, 105, 180, 70],
      fill: true,
    },
  ],
};

const chartOptions = {
  responsive: true,
  title: {
    display: true,
    text: "Chart.js Line Chart - Cubic interpolation mode",
  },
  tooltips: {
    mode: "index",
  },
  scales: {
    xAxes: [
      {
        display: true,
        scaleLabel: {
          display: true,
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
        ticks: {
          suggestedMin: -10,
          suggestedMax: 200,
        },
      },
    ],
  },
};

export default class extends Component {
  render() {
    return (
      <Card title="Line Style Chart">
        <Line data={chartData} options={chartOptions} />
      </Card>
    );
  }
}
