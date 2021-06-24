/* eslint-disable import/no-anonymous-default-export */
import React, { Component } from "react";
import { Card } from "antd";
import Chart from "react-apexcharts";

function generateDayWiseTimeSeries(baseval, count, yrange) {
  var i = 0;
  var series = [];
  while (i < count) {
    var x = baseval;
    var y =
      Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

    series.push([x, y]);
    baseval += 86400000;
    i++;
  }
  return series;
}

export default class extends Component {
  state = {
    series1: [
      {
        data: generateDayWiseTimeSeries(new Date("11 Feb 2017").getTime(), 20, {
          min: 10,
          max: 60,
        }),
      },
    ],
    series2: [
      {
        data: generateDayWiseTimeSeries(new Date("11 Feb 2017").getTime(), 20, {
          min: 10,
          max: 30,
        }),
      },
    ],
    series3: [
      {
        data: generateDayWiseTimeSeries(new Date("11 Feb 2017").getTime(), 20, {
          min: 10,
          max: 90,
        }),
      },
    ],
    chartOptionsLine1: {
      chart: {
        id: "fb",
        group: "social",
      },
      colors: ["#008FFB"],
    },
    chartOptionsLine2: {
      chart: {
        id: "tw",
        group: "social",
      },
      colors: ["#546E7A"],
    },
    chartOptionsArea: {
      chart: {
        id: "yt",
        group: "social",
      },
      colors: ["#00E396"],
    },
  };
  render() {
    return (
      <Card title="Synchronized Line Chart">
        <div id="wrapper">
          <div id="chart-line">
            <Chart
              type="line"
              height="160"
              options={this.state.chartOptionsLine1}
              series={this.state.series1}
            />
          </div>

          <div id="chart-line2">
            <Chart
              type="line"
              height="160"
              options={this.state.chartOptionsLine2}
              series={this.state.series2}
            />
          </div>

          <div id="chart-area">
            <Chart
              type="area"
              height="160"
              options={this.state.chartOptionsArea}
              series={this.state.series3}
            />
          </div>
        </div>
      </Card>
    );
  }
}
