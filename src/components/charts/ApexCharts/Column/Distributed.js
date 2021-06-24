/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Card } from "antd";
import ReactApexChart from "react-apexcharts";

var colors = [
  "#008FFB",
  "#00E396",
  "#FEB019",
  "#FF4560",
  "#775DD0",
  "#546E7A",
  "#26a69a",
  "#D10CE8",
];

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          events: {
            click: function (chart, w, e) {
              console.log(chart, w, e);
            },
          },
        },
        colors: colors,
        plotOptions: {
          bar: {
            columnWidth: "45%",
            distributed: true,
          },
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          categories: [
            "John",
            "Joe",
            "Jake",
            "Amber",
            "Peter",
            "Mary",
            "David",
            "Lily",
          ],
          labels: {
            style: {
              colors: colors,
              fontSize: "14px",
            },
          },
        },
      },
      series: [
        {
          data: [21, 22, 10, 28, 16, 21, 13, 30],
        },
      ],
    };
  }

  render() {
    return (
      <Card title="Distributed Column Chart">
        <div id="chart">
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="bar"
            height="350"
          />
        </div>
      </Card>
    );
  }
}
