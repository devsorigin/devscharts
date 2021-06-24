/* eslint-disable import/no-anonymous-default-export */
import React, { Component } from "react";
import { Chart } from "react-google-charts";
import { Card } from "antd";

export default class extends Component {
  render() {
    return (
      <Card title="Slice Visibility Threshold Pie Chart">
        <Chart
          width={"100%"}
          height={"400px"}
          chartType="PieChart"
          loader={<div>Loading Chart</div>}
          data={[
            ["Pizza", "Popularity"],
            ["Pepperoni", 33],
            ["Hawaiian", 26],
            ["Mushroom", 22],
            ["Sausage", 10], // Below limit.
            ["Anchovies", 9], // Below limit.
          ]}
          options={{
            title: "Popularity of Types of Pizza",
            sliceVisibilityThreshold: 0.2, // 20%
          }}
          rootProps={{ "data-testid": "7" }}
        />
      </Card>
    );
  }
}
