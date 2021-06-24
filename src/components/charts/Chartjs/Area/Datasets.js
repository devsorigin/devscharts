/* eslint-disable import/no-anonymous-default-export */
import React, { Component } from "react";
import { Card } from "antd";
import { Line } from "react-chartjs-2";

const chartData = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      backgroundColor: "red",
      borderColor: "red",
      data: [34, 44, -94, 45, 44, 74, 44],
      hidden: true,
      label: "D0",
    },
    {
      backgroundColor: "orange",
      borderColor: "orange",
      data: [34, 24, -94, 45, 44, 44, 44],
      label: "D1",
      fill: "-1",
    },
    {
      backgroundColor: "yellow",
      borderColor: "yellow",
      data: [34, 54, -94, 45, 44, 74, 44],
      hidden: true,
      label: "D2",
      fill: 1,
    },
    {
      backgroundColor: "green",
      borderColor: "green",
      data: [34, 84, -44, 45, 34, 74, 44],
      label: "D3",
      fill: "-1",
    },
    {
      backgroundColor: "blue",
      borderColor: "blue",
      data: [34, 34, -74, 45, 44, 74, 24],
      label: "D4",
      fill: "-1",
    },
    {
      backgroundColor: "#8884d8",
      borderColor: "#8884d8",
      opacity: 0.2,
      data: [34, 34, -54, 45, 44, 74, 14],
      label: "D5",
      fill: "+2",
    },
    {
      backgroundColor: "purple",
      borderColor: "purple",
      data: [34, 84, 4, 45, 44, 74, 44],
      label: "D6",
      fill: false,
    },
    {
      backgroundColor: "red",
      borderColor: "red",
      data: [34, 34, 4, 45, 54, 74, 24],
      label: "D7",
      fill: 8,
    },
    {
      backgroundColor: "orange",
      borderColor: "orange",
      data: [34, 84, -4, 45, 24, 64, 44],
      hidden: true,
      label: "D8",
      fill: "end",
    },
  ],
};

const chartOptions = {
  maintainAspectRatio: false,
  spanGaps: false,
  elements: {
    line: {
      tension: 0.000001,
    },
  },
  scales: {
    yAxes: [
      {
        stacked: true,
      },
    ],
  },
  plugins: {
    filler: {
      propagate: false,
    },
    "samples-filler-analyser": {
      target: "chart-analyser",
    },
  },
};

export default class extends Component {
  render() {
    return (
      <Card title="Dataset Area Chart">
        <Line data={chartData} options={chartOptions} height={260} />
      </Card>
    );
  }
}
