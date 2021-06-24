/* eslint-disable import/no-anonymous-default-export */
import React, { Component } from "react";
import { Chart } from "react-google-charts";
import { Card } from "antd";

export default class extends Component {
  render() {
    return (
      <Card title="Changing Opacity and Width TrendLines Chart">
        <Chart
          width={"100%"}
          height={"300px"}
          chartType="ScatterChart"
          loader={<div>Loading Chart</div>}
          data={[
            ["Generation", "Descendants"],
            [0, 1],
            [1, 33],
            [2, 269],
            [3, 2013],
          ]}
          options={{
            legend: "none",
            title: "Descendants by Generation",
            hAxis: { title: "Generation", minValue: 0, maxValue: 3 },
            vAxis: { title: "Descendants", minValue: 0, maxValue: 2100 },
            trendlines: {
              0: {
                type: "exponential",
                color: "purple",
                lineWidth: 10,
                opacity: 0.2,
              },
            },
          }}
          rootProps={{ "data-testid": "5" }}
        />
      </Card>
    );
  }
}
