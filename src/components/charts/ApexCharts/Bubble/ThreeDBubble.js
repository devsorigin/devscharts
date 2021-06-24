/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Card } from "antd";
import ReactApexChart from "react-apexcharts";

function generateData(baseval, count, yrange) {
  var i = 0;
  var series = [];
  while (i < count) {
    //var x =Math.floor(Math.random() * (750 - 1 + 1)) + 1;;
    var y =
      Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
    var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

    series.push([baseval, y, z]);
    baseval += 86400000;
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
        fill: {
          type: "gradient",
        },
        xaxis: {
          tickAmount: 12,
          type: "datetime",

          labels: {
            rotate: 0,
          },
        },
        yaxis: {
          max: 70,
        },
        theme: {
          palette: "palette2",
        },
      },
      series: [
        {
          name: "Product1",
          data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
            min: 10,
            max: 60,
          }),
        },
        {
          name: "Product2",
          data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
            min: 10,
            max: 60,
          }),
        },
        {
          name: "Product3",
          data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
            min: 10,
            max: 60,
          }),
        },
        {
          name: "Product4",
          data: generateData(new Date("11 Feb 2017 GMT").getTime(), 20, {
            min: 10,
            max: 60,
          }),
        },
      ],
    };
  }

  render() {
    return (
      <Card title="3D Bubble Chart">
        <div id="chart">
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="bubble"
            height="350"
          />
        </div>
      </Card>
    );
  }
}
