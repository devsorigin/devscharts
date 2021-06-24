/* eslint-disable import/no-anonymous-default-export */
import React, { Component } from "react";
import { Chart } from "react-google-charts";
import { Card } from "antd";

export default class extends Component {
  render() {
    return (
      <Card title="Arrow Format Chart">
        <Chart
          width={"100%"}
          height={300}
          chartType="Table"
          loader={<div>Loading Chart</div>}
          data={[
            ["Department", "Revenues Change"],
            ["Shoes", { v: 12, f: "12.0%" }],
            ["Sports", { v: -7.3, f: "-7.3%" }],
            ["Toys", { v: 0, f: "0%" }],
            ["Electronics", { v: -2.1, f: "-2.1%" }],
            ["Food", { v: 22, f: "22.0%" }],
          ]}
          formatters={[
            {
              type: "ArrowFormat",
              column: 1,
            },
          ]}
          options={{
            allowHtml: true,
            showRowNumber: true,
          }}
          rootProps={{ "data-testid": "1" }}
        />
      </Card>
    );
  }
}
