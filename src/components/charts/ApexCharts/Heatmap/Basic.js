/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Card } from "antd";
import ReactApexChart from "react-apexcharts";

function generateData(count, yrange) {
  var i = 0;
  var series = [];
  while (i < count) {
    var x = "w" + (i + 1).toString();
    var y =
      Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

    series.push({
      x: x,
      y: y,
    });
    i++;
  }
  return series;
}

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        dataLabels: {
          enabled: false,
        },
        colors: ["#008FFB"],
      },
      series: [
        {
          name: "Metric1",
          data: generateData(18, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: "Metric2",
          data: generateData(18, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: "Metric3",
          data: generateData(18, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: "Metric4",
          data: generateData(18, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: "Metric5",
          data: generateData(18, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: "Metric6",
          data: generateData(18, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: "Metric7",
          data: generateData(18, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: "Metric8",
          data: generateData(18, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: "Metric9",
          data: generateData(18, {
            min: 0,
            max: 90,
          }),
        },
      ],
    };
  }

  render() {
    return (
      <Card title="Basic Heatmap Chart">
        <div id="chart">
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="heatmap"
            height="350"
          />
        </div>
      </Card>
    );
  }
}
