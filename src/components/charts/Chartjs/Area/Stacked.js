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
      opacity: 0.2,
      data: [53, 29, 83, 29, 43, 83, 93],
    },
    {
      label: "My Second dataset",
      borderColor: "purple",
      backgroundColor: "purple",
      data: [20, 53, 73, 20, 83, 24, 3],
    },
    {
      label: "My Third dataset",
      borderColor: "green",
      backgroundColor: "green",
      data: [27, 63, 28, 73, 53, 93, 43],
    },
    {
      label: "My Third dataset",
      borderColor: "yellow",
      backgroundColor: "yellow",
      data: [29, 73, 83, 93, 63, 53, 29],
    },
  ],
};

const chartOptions = {
  responsive: true,
  title: {
    display: true,
    text: "Chart.js Line Chart - Stacked Area",
  },
  tooltips: {
    mode: "index",
  },
  hover: {
    mode: "index",
  },
  scales: {
    xAxes: [
      {
        scaleLabel: {
          display: true,
          labelString: "Month",
        },
      },
    ],
    yAxes: [
      {
        stacked: true,
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
      <Card title="Stacked Area Chart">
        <Line data={chartData} options={chartOptions} />
      </Card>
    );
  }
}
