/* eslint-disable import/no-anonymous-default-export */
import React, { Component } from "react";
import { Chart } from "react-google-charts";
import { Card } from "antd";

export default class extends Component {
  render() {
    return (
      <Card title="Negative Values Calendar Chart">
        <Chart
          width={"100%"}
          height={200}
          chartType="Calendar"
          loader={<div>Loading Chart</div>}
          data={[
            [
              { type: "date", id: "Date" },
              { type: "number", id: "Won/Loss" },
            ],
            [new Date(2013, 2, 4), 10],
            [new Date(2013, 2, 5), 3],
            [new Date(2013, 2, 7), -1],
            [new Date(2013, 2, 8), 2],
            [new Date(2013, 2, 12), -1],
            [new Date(2013, 2, 13), 1],
            [new Date(2013, 2, 15), 1],
            [new Date(2013, 2, 16), -4],
            [new Date(2013, 1, 4), 10],
            [new Date(2013, 1, 5), 3],
            [new Date(2013, 1, 7), -1],
            [new Date(2013, 1, 8), 2],
            [new Date(2013, 1, 12), -1],
            [new Date(2013, 1, 13), 1],
            [new Date(2013, 1, 15), 1],
            [new Date(2013, 1, 16), -4],
          ]}
          options={{
            title: "Red Sox Attendance",
          }}
          rootProps={{ "data-testid": "2" }}
        />
      </Card>
    );
  }
}
