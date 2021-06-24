/* eslint-disable import/no-anonymous-default-export */
import React, { Component } from "react";
import { Chart } from "react-google-charts";
import { Card } from "antd";

export default class extends Component {
  render() {
    return (
      <Card title="Labeling Bar Chart">
        <Chart
          width={"100%"}
          height={"300px"}
          chartType="BarChart"
          loader={<div>Loading Chart</div>}
          data={[
            [
              "Element",
              "Density",
              { role: "style" },
              {
                sourceColumn: 0,
                role: "annotation",
                type: "string",
                calc: "stringify",
              },
            ],
            ["Copper", 8.94, "#b87333", null],
            ["Silver", 10.49, "silver", null],
            ["Gold", 19.3, "gold", null],
            ["Platinum", 21.45, "color: #e5e4e2", null],
          ]}
          options={{
            title: "Density of Precious Metals, in g/cm^3",
            width: "100%",
            height: 300,
            bar: { groupWidth: "95%" },
            legend: { position: "none" },
          }}
          // For tests
          rootProps={{ "data-testid": "6" }}
        />
      </Card>
    );
  }
}
