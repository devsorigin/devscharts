/* eslint-disable import/no-anonymous-default-export */
import React, { Component } from "react";
import { Card } from "antd";
import { Bubble } from "react-chartjs-2";

const chartData = {
  datasets: [
    {
      label: "Data 1",
      data: [
        {
          x: 223,
          y: 145,
          v: 165,
        },
        {
          x: 223,
          y: -145,
          v: 265,
        },
        {
          x: 123,
          y: -145,
          v: 165,
        },
        {
          x: 123,
          y: -145,
          v: -165,
        },
        {
          x: 123,
          y: 145,
          v: 165,
        },
        {
          x: 123,
          y: 145,
          v: 165,
        },
        {
          x: 123,
          y: 145,
          v: 165,
        },
        {
          x: 123,
          y: 145,
          v: 165,
        },
      ],
    },
    {
      label: "Data 2",
      data: [
        {
          x: 123,
          y: 145,
          v: 865,
        },
        {
          x: 123,
          y: -145,
          v: 765,
        },
        {
          x: -123,
          y: 135,
          v: 165,
        },
        {
          x: 823,
          y: 145,
          v: -165,
        },
        {
          x: -123,
          y: 175,
          v: 165,
        },
        {
          x: 623,
          y: -145,
          v: 165,
        },
        {
          x: 123,
          y: 155,
          v: -165,
        },
        {
          x: 173,
          y: -145,
          v: 165,
        },
      ],
    },
  ],
};

const chartOptions = {
  aspectRatio: 1,
  legend: false,
  tooltips: false,

  elements: {
    point: {
      backgroundColor: "#82ca9d",
      borderColor: "#82ca9d",

      borderWidth: function (context) {
        return Math.min(Math.max(1, context.datasetIndex + 1), 8);
      },

      hoverBackgroundColor: "transparent",

      hoverBorderColor: function (context) {
        return "yellow";
      },

      hoverBorderWidth: function (context) {
        var value = context.dataset.data[context.dataIndex];
        return Math.round((8 * value.v) / 1000);
      },

      radius: function (context) {
        var value = context.dataset.data[context.dataIndex];
        var size = context.chart.width;
        var base = Math.abs(value.v) / 1000;
        return (size / 24) * base;
      },
    },
  },
};

export default class extends Component {
  render() {
    return (
      <Card title="Basic Bubble Chart">
        <Bubble data={chartData} options={chartOptions} />
      </Card>
    );
  }
}
