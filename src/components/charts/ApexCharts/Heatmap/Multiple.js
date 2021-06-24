/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Card } from "antd";
import ReactApexChart from "react-apexcharts";

function generateData(count, yrange) {
  var i = 0;
  var series = [];
  while (i < count) {
    var x = (i + 1).toString();
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

var data = [
  {
    name: "W1",
    data: generateData(8, {
      min: 0,
      max: 90,
    }),
  },
  {
    name: "W2",
    data: generateData(8, {
      min: 0,
      max: 90,
    }),
  },
  {
    name: "W3",
    data: generateData(8, {
      min: 0,
      max: 90,
    }),
  },
  {
    name: "W4",
    data: generateData(8, {
      min: 0,
      max: 90,
    }),
  },
  {
    name: "W5",
    data: generateData(8, {
      min: 0,
      max: 90,
    }),
  },
  {
    name: "W6",
    data: generateData(8, {
      min: 0,
      max: 90,
    }),
  },
  {
    name: "W7",
    data: generateData(8, {
      min: 0,
      max: 90,
    }),
  },
  {
    name: "W8",
    data: generateData(8, {
      min: 0,
      max: 90,
    }),
  },
  {
    name: "W9",
    data: generateData(8, {
      min: 0,
      max: 90,
    }),
  },
  {
    name: "W10",
    data: generateData(8, {
      min: 0,
      max: 90,
    }),
  },
  {
    name: "W11",
    data: generateData(8, {
      min: 0,
      max: 90,
    }),
  },
  {
    name: "W12",
    data: generateData(8, {
      min: 0,
      max: 90,
    }),
  },
  {
    name: "W13",
    data: generateData(8, {
      min: 0,
      max: 90,
    }),
  },
  {
    name: "W14",
    data: generateData(8, {
      min: 0,
      max: 90,
    }),
  },
  {
    name: "W15",
    data: generateData(8, {
      min: 0,
      max: 90,
    }),
  },
];

data.reverse();

var colors = [
  "#F3B415",
  "#F27036",
  "#663F59",
  "#6A6E94",
  "#4E88B4",
  "#00A7C6",
  "#18D8D8",
  "#A9D794",
  "#46AF78",
  "#A93F55",
  "#8C5E58",
  "#2176FF",
  "#33A1FD",
  "#7A918D",
  "#BAFF29",
];

colors.reverse();

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        dataLabels: {
          enabled: false,
        },
        colors: colors,
        xaxis: {
          type: "category",
          categories: [
            "10:00",
            "10:30",
            "11:00",
            "11:30",
            "12:00",
            "12:30",
            "01:00",
            "01:30",
          ],
        },
        grid: {
          padding: {
            right: 20,
          },
        },
      },
      series: data,
    };
  }

  render() {
    return (
      <Card title="Multiple Heatmap Chart">
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
