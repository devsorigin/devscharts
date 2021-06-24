/* eslint-disable import/no-anonymous-default-export */
import React, { Component } from "react";
import { Card } from "antd";
import { Radar } from "react-chartjs-2";

const chartData = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      backgroundColor: "rgba(170, 0, 255, 0.3)",
      borderColor: "#aa00ff",
      fillOpacity: 0.6,
      data: [54, 94, 44, 94, 44, 34, 14],
      label: "D0",
    },
    {
      backgroundColor: "rgba(240,230,140, 0.3)",
      borderColor: "#F0E68C",
      data: [54, 84, 44, 95, 44, 84, 94],
      hidden: true,
      label: "D1",
      fill: "-1",
    },
    {
      backgroundColor: "rgba(26,178,255, 0.3)",
      borderColor: "#1ab2ff",
      fillOpacity: 0.6,
      data: [24, 84, 94, 45, 74, 44, 84],
      label: "D2",
      fill: 1,
    },
    {
      backgroundColor: "rgba(96,81,140, 0.3)",
      borderColor: "#60518c",
      data: [34, 74, 94, 95, 34, 44, 4],
      label: "D3",
      fill: false,
    },
    {
      backgroundColor: "rgba(0,112,26, 0.3)",
      borderColor: "#00701a",
      fillOpacity: 0.6,
      data: [34, 84, 4, 35, 44, 94, 44],
      label: "D4",
      fill: "-1",
    },
    {
      backgroundColor: "rgba(255,145,0, 0.3)",
      borderColor: "#ff9100",
      data: [34, 64, 4, 45, 44, 34, 94],
      label: "D5",
      fill: "-1",
    },
  ],
};

const chartOptions = {
  maintainAspectRatio: true,
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
    "samples-filler-analyser": {
      target: "chart-analyser",
    },
  },
};

export default class extends Component {
  render() {
    return (
      <Card title="Radar Chart">
        <Radar data={chartData} options={chartOptions} />
      </Card>
    );
  }
}
