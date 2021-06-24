/* eslint-disable import/no-anonymous-default-export */
import React, { Component } from "react";
import { Card } from "antd";
import ReactApexChart from "react-apexcharts";

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        labels: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        theme: {
          monochrome: {
            enabled: true,
          },
        },
        title: {
          text: "Number of leads",
        },
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
      series: [25, 15, 44, 55, 41, 17],
    };
  }

  render() {
    return (
      <Card title="Monochrome Pie Chart">
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
