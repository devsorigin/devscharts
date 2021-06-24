/* eslint-disable import/no-anonymous-default-export */
import React, { Component } from "react";
import { Card } from "antd";
import { Line } from "react-chartjs-2";

const chartData = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      backgroundColor: "#8884d8",
      borderColor: "#8884d8",
      opacity: 0.2,
      data: [34, 84, -94, 45, 44, 74, 44],
      label: "Dataset",
      fill: "origin",
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
  plugins: {
    filler: {
      propagate: false,
    },
  },
  scales: {
    xAxes: [
      {
        ticks: {
          autoSkip: false,
          maxRotation: 0,
        },
      },
    ],
  },
};

export default class extends Component {
  render() {
    return (
      <Card title="Boundary Origin Area Chart">
        <Line data={chartData} options={chartOptions} height={300} />
      </Card>
    );
  }
}
