/* eslint-disable import/no-anonymous-default-export */
import React, { Component } from "react";
import { Chart } from "react-google-charts";
import { Card } from "antd";

export default class extends Component {
  render() {
    return (
      <Card title="Linear TrendLines Chart">
        <Chart
          width={"100%"}
          height={"300px"}
          chartType="ScatterChart"
          loader={<div>Loading Chart</div>}
          data={[
            ["Diameter", "Age"],
            [8, 37],
            [4, 19.5],
            [11, 52],
            [4, 22],
            [3, 16.5],
            [6.5, 32.8],
            [14, 72],
          ]}
          options={{
            title: "Age of sugar maples vs. trunk diameter, in inches",
            hAxis: { title: "Diameter" },
            vAxis: { title: "Age" },
            legend: "none",
            trendlines: { 0: {} },
          }}
          rootProps={{ "data-testid": "1" }}
        />
      </Card>
    );
  }
}
