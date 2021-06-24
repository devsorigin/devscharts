/* eslint-disable import/no-anonymous-default-export */
import React, { Component } from "react";
import { Chart } from "react-google-charts";
import { Card } from "antd";

export default class extends Component {
  render() {
    return (
      <Card title="Number Format Chart">
        <Chart
          width={"100%"}
          height={300}
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
              type: "NumberFormat",
              column: 1,
              options: {
                prefix: "$",
                negativeColor: "red",
                negativeParens: true,
              },
            },
          ]}
          options={{
            allowHtml: true,
            showRowNumber: true,
          }}
          rootProps={{ "data-testid": "5" }}
        />
      </Card>
    );
  }
}
