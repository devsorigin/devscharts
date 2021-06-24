/* eslint-disable import/no-anonymous-default-export */
import React, { Component } from "react";
import { Chart } from "react-google-charts";
import { Card } from "antd";

export default class extends Component {
  render() {
    return (
      <Card title="Basic Sankey Chart">
        <Chart
          width={"100%"}
          height={"300px"}
          chartType="Sankey"
          loader={<div>Loading Chart</div>}
          data={[
            ["From", "To", "Weight"],
            ["A", "X", 5],
            ["A", "Y", 7],
            ["A", "Z", 6],
            ["B", "X", 2],
            ["B", "Y", 9],
            ["B", "Z", 4],
          ]}
          rootProps={{ "data-testid": "1" }}
        />
      </Card>
    );
  }
}
