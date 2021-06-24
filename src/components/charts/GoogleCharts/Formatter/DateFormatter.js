/* eslint-disable import/no-anonymous-default-export */
import React, { Component } from "react";
import { Chart } from "react-google-charts";
import { Card } from "antd";

export default class extends Component {
  render() {
    return (
      <Card title="Date Format Chart">
        <Chart
          width={"100%"}
          height={300}
          chartType="Table"
          loader={<div>Loading Chart</div>}
          data={[
            [
              "Employee Name",
              { type: "date", label: "Start Date (Long)" },
              { type: "date", label: "Start Date (Medium)" },
              { type: "date", label: "Start Date (Short)" },
            ],
            [
              "Mike",
              new Date(2008, 1, 28, 0, 31, 26),
              new Date(2008, 1, 28, 0, 31, 26),
              new Date(2008, 1, 28, 0, 31, 26),
            ],
            [
              "Bob",
              new Date(2007, 5, 1, 0),
              new Date(2007, 5, 1, 0),
              new Date(2007, 5, 1, 0),
            ],
            [
              "Alice",
              new Date(2006, 7, 16),
              new Date(2006, 7, 16),
              new Date(2006, 7, 16),
            ],
          ]}
          formatters={[
            {
              type: "DateFormat",
              column: 1,
              options: {
                formatType: "long",
              },
            },
            {
              type: "DateFormat",
              column: 2,
              options: {
                formatType: "medium",
              },
            },
            {
              type: "DateFormat",
              column: 3,
              options: {
                formatType: "short",
              },
            },
          ]}
          options={{
            showRowNumber: true,
          }}
          rootProps={{ "data-testid": "4" }}
        />
      </Card>
    );
  }
}
