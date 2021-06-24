/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Card } from "antd";
import ReactApexChart from "react-apexcharts";

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          dropShadow: {
            enabled: true,
            blur: 1,
            left: 1,
            top: 1,
          },
        },
        labels: ["2011", "2012", "2013", "2014", "2015", "2016"],
        stroke: {
          width: 0,
        },
        fill: {
          opacity: 0.4,
        },
        markers: {
          size: 0,
        },
      },
      series: [
        {
          name: "Series 1",
          data: [80, 50, 30, 40, 100, 20],
        },
        {
          name: "Series 2",
          data: [20, 30, 40, 80, 20, 80],
        },
        {
          name: "Series 3",
          data: [44, 76, 78, 13, 43, 10],
        },
      ],
    };
  }

  render() {
    return (
      <Card title="Multiple Radar Chart">
        <div id="chart">
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="radar"
            height="350"
          />
        </div>
      </Card>
    );
  }
}
