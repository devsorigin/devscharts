/* eslint-disable import/no-anonymous-default-export */
import React, { Component } from "react";
import { Card } from "antd";
import { Line } from "react-chartjs-2";

const datapoints = [0, 20, 20, 60, 60, 120, NaN, 180, 120, 125, 105, 110, 170];

const chartData = {
  labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
  datasets: [
    {
      label: "Cubic interpolation (monotone)",
      data: datapoints,
      backgroundColor: "#8884d8",
      borderColor: "#8884d8",
      fillOpacity: 0.6,
      fill: false,
      cubicInterpolationMode: "monotone",
    },
    {
      label: "Cubic interpolation (default)",
      data: datapoints,
      backgroundColor: "#82ca9d",
      borderColor: "#82ca9d",
      fillOpacity: 0.6,
      fill: false,
    },
    {
      label: "Linear interpolation",
      data: datapoints,
      backgroundColor: "#ff0fac",
      borderColor: "#ff0fac",
      fillOpacity: 0.6,
      fill: false,
      lineTension: 0,
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
      <Card title="Interpolation Line Chart">
        <Line data={chartData} options={chartOptions} />
      </Card>
    );
  }
}
