/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import ReactApexChart from "react-apexcharts";
import { Card } from "antd";

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          stacked: true,
          shadow: {
            enabled: true,
            blur: 1,
            opacity: 0.5,
          },
        },
        plotOptions: {
          bar: {
            horizontal: true,
            barHeight: "60%",
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          width: 2,
        },
        xaxis: {
          categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
        },
        yaxis: {
          title: {
            text: undefined,
          },
        },
        tooltip: {
          shared: false,
          y: {
            formatter: function (val) {
              return val + "K";
            },
          },
        },
        fill: {
          type: "pattern",
          opacity: 1,
          pattern: {
            style: [
              "circles",
              "slantedLines",
              "verticalLines",
              "horizontalLines",
            ],
          },
        },
        states: {
          hover: {
            filter: "none",
          },
        },
        legend: {
          position: "right",
          offsetY: 40,
        },
      },
      series: [
        {
          name: "Marine Sprite",
          data: [44, 55, 41, 37, 22, 43, 21],
        },
        {
          name: "Striking Calf",
          data: [53, 32, 33, 52, 13, 43, 32],
        },
        {
          name: "Tank Picture",
          data: [12, 17, 11, 9, 15, 11, 20],
        },
        {
          name: "Bucket Slope",
          data: [9, 7, 5, 8, 6, 9, 4],
        },
      ],
    };
  }

  render() {
    return (
      <Card title="Pattern Bar Chart">
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
