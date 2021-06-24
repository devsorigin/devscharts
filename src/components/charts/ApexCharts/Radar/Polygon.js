/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Card } from "antd";
import ReactApexChart from "react-apexcharts";

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        labels: [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        plotOptions: {
          radar: {
            size: 140,
            polygons: {
              strokeColor: "#e9e9e9",
              fill: {
                colors: ["#f8f8f8", "#fff"],
              },
            },
          },
        },
        colors: ["#FF4560"],
        markers: {
          size: 4,
          colors: ["#fff"],
          strokeColor: "#FF4560",
          strokeWidth: 2,
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return val;
            },
          },
        },
        yaxis: {
          tickAmount: 7,
          labels: {
            formatter: function (val, i) {
              if (i % 2 === 0) {
                return val;
              } else {
                return "";
              }
            },
          },
        },
      },
      series: [
        {
          name: "Series 1",
          data: [20, 100, 40, 30, 50, 80, 33],
        },
      ],
    };
  }

  render() {
    return (
      <Card title="Polygon Radar Chart">
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
