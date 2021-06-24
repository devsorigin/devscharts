/* eslint-disable import/no-anonymous-default-export */
import React, { Component } from "react";
import { Chart } from "react-google-charts";
import { Card } from "antd";

export default class extends Component {
  render() {
    return (
      <Card title="Table Chart">
        <Chart
          width={"100%"}
          height={300}
          chartType="Table"
          loader={<div>Loading Chart</div>}
          data={[
            [
              { type: "string", label: "Name" },
              { type: "number", label: "Salary" },
              { type: "boolean", label: "Full Time Employee" },
            ],
            ["Mike", { v: 10000, f: "$10,000" }, true],
            ["Jim", { v: 8000, f: "$8,000" }, false],
            ["Alice", { v: 12500, f: "$12,500" }, true],
            ["Bob", { v: 7000, f: "$7,000" }, true],
          ]}
          options={{
            showRowNumber: true,
          }}
          rootProps={{ "data-testid": "1" }}
        />
      </Card>
    );
  }
}
