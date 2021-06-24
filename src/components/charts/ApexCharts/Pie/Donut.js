/* eslint-disable import/no-anonymous-default-export */
import React, { Component } from "react";
import { Card } from "antd";
import ReactApexChart from "react-apexcharts";

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
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
      series: [44, 55, 41, 17, 15],
    };
  }

  render() {
    return (
      <Card title="Donut Chart">
        <div id="chart">
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="donut"
            height="350"
            width={"100%"}
          />
        </div>
      </Card>
    );
  }
}
