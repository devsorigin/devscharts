/* eslint-disable import/no-anonymous-default-export */
import React, { Component } from "react";
import { Chart } from "react-google-charts";
import { Card } from "antd";

export default class extends Component {
  render() {
    return (
      <Card title="Diff Pie Chart">
        <Chart
          width={"100%"}
          height={"300px"}
          chartType="PieChart"
          loader={<div>Loading Chart</div>}
          diffdata={{
            old: [
              ["Major", "Degrees"],
              ["Business", 256070],
              ["Education", 108034],
              ["Social Sciences &amp; History", 127101],
              ["Health", 81863],
              ["Psychology", 74194],
            ],
            new: [
              ["Major", "Degrees"],
              ["Business", 358293],
              ["Education", 101265],
              ["Social Sciences &amp; History", 172780],
              ["Health", 129634],
              ["Psychology", 97216],
            ],
          }}
          options={{
            pieSliceText: "none",
          }}
          rootProps={{ "data-testid": "2" }}
        />
      </Card>
    );
  }
}
