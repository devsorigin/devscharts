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
      yAxisID: "y-axis-1",
    },
    {
      label: "My Second dataset",
      fill: false,
      backgroundColor: "#82ca9d",
      borderColor: "#82ca9d",
      fillOpacity: 0.6,
      data: [8, 60, 80, 20, 80, 30, 50],
      yAxisID: "y-axis-2",
    },
  ],
};

const chartOptions = {
  responsive: true,
  hoverMode: "index",
  stacked: false,
  title: {
    display: true,
    text: "Chart.js Line Chart - Multi Axis",
  },
  scales: {
    yAxes: [
      {
        type: "linear", // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
        display: true,
        position: "left",
        id: "y-axis-1",
      },
      {
        type: "linear", // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
        display: true,
        position: "right",
        id: "y-axis-2",

        // grid line settings
        gridLines: {
          drawOnChartArea: false, // only want the grid lines for one axis to show up
        },
      },
    ],
  },
};

export default class extends Component {
  render() {
    return (
      <Card title="Multi Axis Line Chart">
        <Line data={chartData} options={chartOptions} />
      </Card>
    );
  }
}
