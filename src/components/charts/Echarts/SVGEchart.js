/* eslint-disable import/no-anonymous-default-export */
import React, { Component } from "react";
import ReactEcharts from "echarts-for-react";
import { Card } from "antd";

export default class extends Component {
  getOption = () => ({
    title: {
      text: "ECharts 入门示例",
    },
    tooltip: {},
    legend: {
      data: ["销量"],
    },
    xAxis: {
      data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
    },
    yAxis: {},
    series: [
      {
        name: "销量",
        type: "bar",
        data: [5, 20, 36, 10, 10, 20],
      },
    ],
  });

  render() {
    return (
      <Card title="SVG Echart">
        <ReactEcharts
          option={this.getOption()}
          style={{ height: "400px", width: "100%" }}
          opts={{ renderer: "svg" }}
          className="react_for_echarts"
        />
      </Card>
    );
  }
}
