/* eslint-disable import/no-anonymous-default-export */
import React, { Component } from "react";
import { Chart } from "react-google-charts";
import { Card } from "antd";

export default class extends Component {
  render() {
    return (
      <Card title="3D Pie Chart">
        <Chart
          width={"100%"}
          height={"300px"}
          chartType="PieChart"
          loader={<div>Loading Chart</div>}
          data={[
            ["Task", "Hours per Day"],
            ["Work", 11],
            ["Eat", 2],
            ["Commute", 2],
            ["Watch TV", 2],
            ["Sleep", 7],
          ]}
          options={{
            title: "My Daily Activities",
            // Just add this option
            is3D: true,
          }}
          rootProps={{ "data-testid": "2" }}
        />
      </Card>
    );
  }
}
