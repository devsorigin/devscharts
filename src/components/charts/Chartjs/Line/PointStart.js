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
      data: [10, 23, 5, 99, 67, 43, 0],
      fill: false,
      pointRadius: 10,
      pointHoverRadius: 15,
      showLine: false, // no line shown
    },
  ],
};

const chartOptions = {
  responsive: true,
  title: {
    display: true,
    text: "Point Style: star",
  },
  legend: {
    display: false,
  },
  elements: {
    point: {
      pointStyle: "star",
    },
  },
};

export default class extends Component {
  render() {
    return (
      <Card title="Point Start Line Chart">
        <Line data={chartData} options={chartOptions} />
      </Card>
    );
  }
}
