/* eslint-disable import/no-anonymous-default-export */
import React, { Component } from "react";
import { Chart } from "react-google-charts";
import { Card } from "antd";

export default class extends Component {
  render() {
    return (
      <Card title="Stacked Stepped Area Chart">
        <Chart
          width={"100%"}
          height={"400px"}
          chartType="AreaChart"
          loader={<div>Loading Chart</div>}
          data={[
            ["Style", "Colonial", "Victorian", "Modern", "Contemporary"],
            ["2013", 5.2, 3.6, 2.8, 2],
            ["2014", 5.6, 4.0, 2.8, 3],
            ["2015", 7.2, 2.2, 2.2, 6.0],
            ["2016", 8.0, 1.7, 0.8, 4.0],
          ]}
          options={{
            isStacked: "relative",
            height: 300,
            legend: { position: "top", maxLines: 3 },
            vAxis: {
              minValue: 0,
              ticks: [0, 0.3, 0.6, 0.9, 1],
            },
          }}
          rootProps={{ "data-testid": "2" }}
        />
      </Card>
    );
  }
}
