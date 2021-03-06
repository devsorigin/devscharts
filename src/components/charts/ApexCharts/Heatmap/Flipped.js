/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Card } from "antd";
import ReactApexChart from "react-apexcharts";

function generateData(count, yrange) {
  var i = 0;
  var series = [];
  while (i < count) {
    var y =
      Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

    series.push(y);
    i++;
  }
  return series;
}

var data = [
  {
    name: "10:00",
    data: generateData(15, {
      min: 0,
      max: 90,
    }),
  },
  {
    name: "10:30",
    data: generateData(15, {
      min: 0,
      max: 90,
    }),
  },
  {
    name: "11:00",
    data: generateData(15, {
      min: 0,
      max: 90,
    }),
  },
  {
    name: "11:30",
    data: generateData(15, {
      min: 0,
      max: 90,
    }),
  },
  {
    name: "12:00",
    data: generateData(15, {
      min: 0,
      max: 90,
    }),
  },
  {
    name: "12:30",
    data: generateData(15, {
      min: 0,
      max: 90,
    }),
  },
  {
    name: "13:00",
    data: generateData(15, {
      min: 0,
      max: 90,
    }),
  },
  {
    name: "13:30",
    data: generateData(15, {
      min: 0,
      max: 90,
    }),
  },
];

data.reverse();

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        dataLabels: {
          enabled: false,
        },
        plotOptions: {
          heatmap: {
            colorScale: {
              inverse: true,
            },
          },
        },
        colors: [
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
        ],
        xaxis: {
          type: "category",
          categories: [
            "W1",
            "W2",
            "W3",
            "W4",
            "W5",
            "W6",
            "W7",
            "W8",
            "W9",
            "W10",
            "W11",
            "W12",
            "W13",
            "W14",
            "W15",
          ],
        },
      },
      series: data,
    };
  }

  render() {
    return (
      <Card title="Flipped Heatmap Chart">
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
