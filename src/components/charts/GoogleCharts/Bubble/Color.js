/* eslint-disable import/no-anonymous-default-export */
import React, { Component } from "react";
import { Chart } from "react-google-charts";
import { Card } from "antd";

export default class extends Component {
  render() {
    return (
      <Card title="Colored Bubble Chart">
        <Chart
          width={"100%"}
          height={"300px"}
          chartType="BubbleChart"
          loader={<div>Loading Chart</div>}
          data={[
            ["ID", "X", "Y", "Temperature"],
            ["", 80, 167, 120],
            ["", 79, 136, 130],
            ["", 78, 184, 50],
            ["", 72, 278, 230],
            ["", 81, 200, 210],
            ["", 72, 170, 100],
            ["", 68, 477, 80],
          ]}
          options={{
            colorAxis: { colors: ["yellow", "red"] },
          }}
          rootProps={{ "data-testid": "2" }}
        />
      </Card>
    );
  }
}
