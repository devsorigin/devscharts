/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Card } from "antd";
import ReactApexChart from "react-apexcharts";

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        labels: ["January", "February", "March", "April", "May", "June"],
      },
      series: [
        {
          name: "Series 1",
          data: [80, 50, 30, 40, 100, 20],
        },
      ],
    };
  }

  render() {
    return (
      <Card title="Basic Radar Chart">
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
