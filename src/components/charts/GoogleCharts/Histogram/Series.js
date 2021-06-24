/* eslint-disable import/no-anonymous-default-export */
import React, { Component } from "react";
import { Chart } from "react-google-charts";
import { Card } from "antd";

export default class extends Component {
  render() {
    return (
      <Card title="Multiple Series Histogram Chart">
        <Chart
          width={"100%"}
          height={"300px"}
          chartType="Histogram"
          loader={<div>Loading Chart</div>}
          data={[
            ["Quarks", "Leptons", "Gauge Bosons", "Scalar Bosons"],
            [2 / 3, -1, 0, 0],
            [2 / 3, -1, 0, null],
            [2 / 3, -1, 0, null],
            [-1 / 3, 0, 1, null],
            [-1 / 3, 0, -1, null],
            [-1 / 3, 0, null, null],
            [-1 / 3, 0, null, null],
          ]}
          options={{
            title: "Charges of subatomic particles",
            legend: { position: "top", maxLines: 2 },
            colors: ["#5C3292", "#1A8763", "#871B47", "#999999"],
            interpolateNulls: false,
          }}
          rootProps={{ "data-testid": "5" }}
        />
      </Card>
    );
  }
}
