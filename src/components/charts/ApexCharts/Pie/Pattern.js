/* eslint-disable import/no-anonymous-default-export */
import React, { Component } from "react";
import { Card } from "antd";
import ReactApexChart from "react-apexcharts";

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          dropShadow: {
            enabled: true,
            color: "#111",
            top: -1,
            left: 3,
            blur: 3,
            opacity: 0.2,
          },
        },
        stroke: {
          width: 0,
        },
        labels: ["Comedy", "Action", "SciFi", "Drama", "Horror"],
        dataLabels: {
          dropShadow: {
            blur: 3,
            opacity: 0.8,
          },
        },
        fill: {
          type: "pattern",
          opacity: 1,
          pattern: {
            enabled: true,
            style: [
              "verticalLines",
              "squares",
              "horizontalLines",
              "circles",
              "slantedLines",
            ],
          },
        },
        states: {
          hover: {
            enabled: false,
          },
        },
        theme: {
          palette: "palette2",
        },
        title: {
          text: "Favourite Movie Type",
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
      series: [44, 55, 41, 17, 15],
    };
  }

  render() {
    return (
      <Card title="Pattern Donut Chart">
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
