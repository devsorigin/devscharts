/* eslint-disable import/no-anonymous-default-export */
import React, { Component } from "react";
import { Card } from "antd";
import Chart from "react-apexcharts";

export default class extends Component {
  state = {
    chartOptionsArea: {
      chart: {
        id: "chartArea",
        toolbar: {
          autoSelected: "pan",
          show: false,
        },
      },
      colors: ["#546E7A"],
      stroke: {
        width: 3,
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        opacity: 1,
      },
      markers: {
        size: 0,
      },
      xaxis: {
        type: "datetime",
      },
    },
    chartOptionsBrush: {
      chart: {
        id: "chartBrush",
        brush: {
          target: "chartArea",
          enabled: true,
        },
        selection: {
          enabled: true,
          xaxis: {
            min: new Date("19 Jun 2017").getTime(),
            max: new Date("14 Aug 2017").getTime(),
          },
        },
      },
      colors: ["#008FFB"],
      fill: {
        type: "gradient",
        gradient: {
          opacityFrom: 0.91,
          opacityTo: 0.1,
        },
      },
      xaxis: {
        type: "datetime",
        tooltip: {
          enabled: false,
        },
      },
      yaxis: {
        tickAmount: 2,
      },
    },
    series: [
      {
        data: this.generateDayWiseTimeSeries(
          new Date("11 Feb 2017").getTime(),
          185,
          {
            min: 30,
            max: 90,
          }
        ),
      },
    ],
  };

  generateDayWiseTimeSeries(baseval, count, yrange) {
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

  render() {
    return (
      <Card title="Brush Line Chart">
        <div id="charts">
          <div id="chart1">
            <Chart
              options={this.state.chartOptionsArea}
              series={this.state.series}
              type="line"
              height="230"
            />
          </div>
          <div id="chart2">
            <Chart
              options={this.state.chartOptionsBrush}
              series={this.state.series}
              type="area"
              height="130"
            />
          </div>
        </div>
      </Card>
    );
  }
}
