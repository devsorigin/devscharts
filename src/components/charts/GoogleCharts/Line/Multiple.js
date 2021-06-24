/* eslint-disable import/no-anonymous-default-export */
import React, { Component } from "react";
import { Chart } from "react-google-charts";
import { Card } from "antd";

export default class extends Component {
  render() {
    return (
      <Card title="Multiple Line Chart">
        <Chart
          width={"100%"}
          height={"300px"}
          chartType="LineChart"
          loader={<div>Loading Chart</div>}
          data={[
            ["x", "dogs", "cats"],
            [0, 0, 0],
            [1, 10, 5],
            [2, 23, 15],
            [3, 17, 9],
            [4, 18, 10],
            [5, 9, 5],
            [6, 11, 3],
            [7, 27, 19],
          ]}
          options={{
            hAxis: {
              title: "Time",
            },
            vAxis: {
              title: "Popularity",
            },
            series: {
              1: { curveType: "function" },
            },
          }}
          rootProps={{ "data-testid": "2" }}
        />
      </Card>
    );
  }
}
