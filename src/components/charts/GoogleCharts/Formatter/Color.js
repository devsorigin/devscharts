/* eslint-disable import/no-anonymous-default-export */
import React, { Component } from "react";
import { Chart } from "react-google-charts";
import { Card } from "antd";

export default class extends Component {
  render() {
    return (
      <Card title="Color Format Chart">
        <Chart
          width={"100%"}
          height={"300px"}
          chartType="Table"
          loader={<div>Loading Chart</div>}
          data={[
            ["Department", "Revenues Change"],
            ["Shoes", 10700],
            ["Sports", -15400],
            ["Toys", 12500],
            ["Electronics", -2100],
            ["Food", 22600],
            ["Art", 1100],
          ]}
          formatters={[
            {
              type: "ColorFormat",
              column: 1,
              options: {
                width: 120,
              },
              ranges: [
                [-20000, 0, "white", "orange"],
                [20000, null, "red", "#33ff33"],
              ],
            },
          ]}
          options={{
            allowHtml: true,
            showRowNumber: true,
            width: "100%",
            height: "100%",
          }}
          rootProps={{ "data-testid": "3" }}
        />
      </Card>
    );
  }
}
