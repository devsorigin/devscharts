/* eslint-disable import/no-anonymous-default-export */
import React, { Component } from "react";
import { Chart } from "react-google-charts";
import { Card } from "antd";

export default class extends Component {
  render() {
    return (
      <Card title="Exponential TrendLines Chart">
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
            title: "Descendants by Generation",
            hAxis: { title: "Generation", minValue: 0, maxValue: 3 },
            vAxis: { title: "Descendants", minValue: 0, maxValue: 2100 },

            trendlines: {
              0: {
                type: "exponential",
                visibleInLegend: true,
              },
            },
          }}
          rootProps={{ "data-testid": "2" }}
        />
      </Card>
    );
  }
}
