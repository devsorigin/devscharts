/* eslint-disable import/no-anonymous-default-export */
import React, { Component } from "react";
import { Chart } from "react-google-charts";
import { Card } from "antd";

export default class extends Component {
  render() {
    return (
      <Card title="Rotating A Pie Chart">
        <Chart
          width={"100%"}
          height={"300px"}
          chartType="PieChart"
          loader={<div>Loading Chart</div>}
          data={[
            ["Language", "Speakers (in millions)"],
            ["German", 5.85],
            ["French", 1.66],
            ["Italian", 0.316],
            ["Romansh", 0.0791],
          ]}
          options={{
            legend: "none",
            pieSliceText: "label",
            title: "Swiss Language Use (100 degree rotation)",
            pieStartAngle: 100,
          }}
          rootProps={{ "data-testid": "4" }}
        />
      </Card>
    );
  }
}
