/* eslint-disable import/no-anonymous-default-export */
import React, { Component } from "react";
import { Chart } from "react-google-charts";
import { Card } from "antd";

export default class extends Component {
  render() {
    return (
      <Card title="Difference Column Chart">
        <Chart
          width={"100%"}
          height={"300px"}
          chartType="ColumnChart"
          loader={<div>Loading Chart</div>}
          diffdata={{
            old: [
              ["Name", "Popularity"],
              ["Cesar", 250],
              ["Rachel", 4200],
              ["Patrick", 2900],
              ["Eric", 8200],
            ],
            new: [
              ["Name", "Popularity"],
              ["Cesar", 370],
              ["Rachel", 600],
              ["Patrick", 700],
              ["Eric", 1500],
            ],
          }}
          options={{
            legend: { position: "top" },
          }}
          rootProps={{ "data-testid": "4" }}
        />
      </Card>
    );
  }
}
