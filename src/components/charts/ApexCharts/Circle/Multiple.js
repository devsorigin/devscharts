/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import ReactApexChart from "react-apexcharts";
import { Card } from "antd";

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        labels: ["Apples", "Oranges", "Bananas", "Berries"],
        radialBar: {
          dataLabels: {
            name: {
              fontSize: "22px",
            },
            value: {
              fontSize: "16px",
            },
            total: {
              show: true,
              label: "Total",
              formatter: function (w) {
                // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                return 249;
              },
            },
          },
        },
      },
      series: [44, 55, 67, 83],
    };
  }

  render() {
    return (
      <Card title="Multiple Circle Chart">
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
