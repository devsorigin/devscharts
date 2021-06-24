/* eslint-disable import/no-anonymous-default-export */
import React, { Component } from "react";
import { Card } from "antd";
import ReactApexChart from "react-apexcharts";

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
      series: [44, 55, 13, 43, 22],
    };
  }

  render() {
    return (
      <Card title="Simple Pie Chart">
        <div id="chart">
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="pie"
            height="350"
            width={"100%"}
          />
        </div>
      </Card>
    );
  }
}
