/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import ReactApexChart from "react-apexcharts";
import { Card } from "antd";

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        plotOptions: {
          radialBar: {
            hollow: {
              size: "70%",
            },
          },
        },
        labels: ["Cricket"],
      },
      series: [70],
    };
  }

  render() {
    return (
      <Card title="Basic Circle Chart">
        <div id="chart">
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="radialBar"
            height="350"
          />
        </div>
      </Card>
    );
  }
}
