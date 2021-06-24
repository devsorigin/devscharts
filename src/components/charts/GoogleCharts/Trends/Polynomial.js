/* eslint-disable import/no-anonymous-default-export */
import React, { Component } from "react";
import { Chart } from "react-google-charts";
import { Card } from "antd";

export default class extends Component {
  render() {
    return (
      <Card title="Polynomial TrendLines Chart">
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
            title: "Age vs. Weight comparison",
            crosshair: { trigger: "both", orientation: "both" },
            trendlines: {
              0: {
                type: "polynomial",
                degree: 3,
                visibleInLegend: true,
                labelInLegend: "Trend",
              },
            },
          }}
          rootProps={{ "data-testid": "4" }}
        />
      </Card>
    );
  }
}
