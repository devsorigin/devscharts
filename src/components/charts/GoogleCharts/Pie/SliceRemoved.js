/* eslint-disable import/no-anonymous-default-export */
import React, { Component } from "react";
import { Chart } from "react-google-charts";
import { Card } from "antd";

export default class extends Component {
  render() {
    return (
      <Card title="Removing A Slice Pie Chart">
        <Chart
          width={"100%"}
          height={"400px"}
          chartType="PieChart"
          loader={<div>Loading Chart</div>}
          data={[
            ["Pac Man", "Percentage"],
            ["", 75],
            ["", 25],
          ]}
          options={{
            legend: "none",
            pieSliceText: "none",
            pieStartAngle: 135,
            tooltip: { trigger: "none" },
            slices: {
              0: { color: "yellow" },
              1: { color: "transparent" },
            },
          }}
          rootProps={{ "data-testid": "6" }}
        />
      </Card>
    );
  }
}
