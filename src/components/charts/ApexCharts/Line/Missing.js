/* eslint-disable import/no-anonymous-default-export */
import React, { Component } from "react";
import { Card } from "antd";
import Chart from "react-apexcharts";

export default class extends Component {
  state = {
    options: {
      chart: {
        zoom: {
          enabled: false,
        },
        animations: {
          enabled: false,
        },
      },
      stroke: {
        width: [5, 5, 4],
        curve: "straight",
      },
    },
    series: [
      {
        name: "Peter",
        data: [5, 5, 10, 8, 7, 5, 4, null, null, null, 10, 10, 7, 8, 6, 9],
      },
      {
        name: "Johnny",
        data: [
          10,
          15,
          null,
          12,
          null,
          10,
          12,
          15,
          null,
          null,
          12,
          null,
          14,
          null,
          null,
          null,
        ],
      },
      {
        name: "David",
        data: [
          null,
          null,
          null,
          null,
          3,
          4,
          1,
          3,
          4,
          6,
          7,
          9,
          5,
          null,
          null,
          null,
        ],
      },
    ],
  };

  render() {
    return (
      <Card title="Missing Line Chart">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="line"
          height="350"
        />
      </Card>
    );
  }
}
