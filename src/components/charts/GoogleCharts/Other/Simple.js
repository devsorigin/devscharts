/* eslint-disable import/no-anonymous-default-export */
import React, { Component } from "react";
import { Chart } from "react-google-charts";
import { Card } from "antd";

export default class extends Component {
  render() {
    return (
      <Card title="Simple Chart">
        <Chart
          chartType="ScatterChart"
          data={[
            ["Age", "Weight"],
            [4, 5.5],
            [8, 12],
          ]}
          width={"100%"}
          height={300}
          legendToggle
        />
      </Card>
    );
  }
}
