/* eslint-disable import/no-anonymous-default-export */
import React, { Component } from "react";
import { Card } from "antd";
import { Line } from "react-chartjs-2";

const chartData = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "#8884d8",
      borderColor: "#8884d8",
      fillOpacity: 0.6,
      data: [50, 90, 30, 90, 9, 50, 98],
      fill: false,
    },
    {
      label: "My Second dataset",
      fill: false,
      backgroundColor: "#82ca9d",
      borderColor: "#82ca9d",
      fillOpacity: 0.6,
      data: [8, 60, 80, 20, 80, 30, 50],
    },
  ],
};

const chartOptions = {
  responsive: true,
  title: {
    display: true,
    text: "Chart.js Line Chart",
  },
  tooltips: {
    mode: "index",
    intersect: false,
  },
  hover: {
    mode: "nearest",
    intersect: true,
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
};

export default class extends Component {
  render() {
    return (
      <Card title="Basic Line Chart">
        <Line data={chartData} options={chartOptions} />
      </Card>
    );
  }
}
