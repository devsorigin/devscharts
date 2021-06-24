/* eslint-disable import/no-anonymous-default-export */
import React, { Component } from "react";
import { Chart } from "react-google-charts";
import { Card } from "antd";

export default class extends Component {
  render() {
    return (
      <Card title="Stacked Area Chart">
        <Chart
          width={"100%"}
          height={"300px"}
          chartType="AreaChart"
          loader={<div>Loading Chart</div>}
          data={[
            ["Year", "Sales", "Expenses"],
            ["2013", 1000, 400],
            ["2014", 1170, 460],
            ["2015", 660, 1120],
            ["2016", 1030, 540],
          ]}
          options={{
            isStacked: true,
            height: 300,
            legend: { position: "top", maxLines: 3 },
            vAxis: { minValue: 0 },
            // lineWidth: 25
          }}
          // For tests
          rootProps={{ "data-testid": "2" }}
        />
      </Card>
    );
  }
}
