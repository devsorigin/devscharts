/* eslint-disable import/no-anonymous-default-export */
import React, { Component } from "react";
import { Card } from "antd";
import Chart from "react-apexcharts";
import ApexCharts from "apexcharts";

var lastDate = 0;
var data = [];

function getDayWiseTimeSeries(baseval, count, yrange) {
  var i = 0;
  while (i < count) {
    var x = baseval;
    var y =
      Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

    data.push({
      x,
      y,
    });
    lastDate = baseval;
    baseval += 86400000;
    i++;
  }
}

getDayWiseTimeSeries(new Date("11 Feb 2017 GMT").getTime(), 10, {
  min: 10,
  max: 90,
});

function getNewSeries(baseval, yrange) {
  var newDate = baseval + 86400000;
  lastDate = newDate;
  data.push({
    x: newDate,
    y: Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min,
  });
}

function resetData() {
  data = data.slice(data.length - 10, data.length);
}

export default class extends Component {
  state = {
    options: {
      chart: {
        id: "realtime",
        animations: {
          enabled: true,
          easing: "linear",
          dynamicAnimation: {
            speed: 2000,
          },
        },
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      markers: {
        size: 0,
      },
      xaxis: {
        type: "datetime",
        range: 777600000,
      },
      yaxis: {
        max: 100,
      },
      legend: {
        show: false,
      },
    },
    series: [
      {
        data: data.slice(),
      },
    ],
  };

  componentDidMount() {
    this.intervals();
  }

  intervals() {
    window.setInterval(() => {
      getNewSeries(lastDate, {
        min: 10,
        max: 90,
      });

      ApexCharts.exec("realtime", "updateSeries", [
        {
          data: data,
        },
      ]);
    }, 2000);

    // every 60 seconds, we reset the data
    window.setInterval(() => {
      resetData();

      ApexCharts.exec(
        "realtime",
        "updateSeries",
        [
          {
            data: data,
          },
        ],
        false,
        true
      );
    }, 60000);
  }

  render() {
    return (
      <Card title="Real Time Line Chart">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="line"
          height="350"
        />
      </Card>
    );
  }
}
