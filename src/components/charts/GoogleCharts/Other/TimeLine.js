/* eslint-disable import/no-anonymous-default-export */
import React, { Component } from "react";
import { Chart } from "react-google-charts";
import { Card } from "antd";

export default class extends Component {
  render() {
    return (
      <Card title="Time Line Chart">
        <Chart
          width={"100%"}
          height={300}
          chartType="Timeline"
          loader={<div>Loading Chart</div>}
          data={[
            [
              { type: "string", id: "President" },
              { type: "date", id: "Start" },
              { type: "date", id: "End" },
            ],
            ["Washington", new Date(1789, 3, 30), new Date(1797, 2, 4)],
            ["Adams", new Date(1797, 2, 4), new Date(1801, 2, 4)],
            ["Jefferson", new Date(1801, 2, 4), new Date(1809, 2, 4)],
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
