/* eslint-disable import/no-anonymous-default-export */
import React, { Component } from "react";
import { Chart } from "react-google-charts";
import { Card } from "antd";

export default class extends Component {
  render() {
    return (
      <Card title="Proportional Geo Chart">
        <Chart
          width={"100%"}
          height={"300px"}
          chartType="GeoChart"
          data={[
            ["Country", "Population", "Area Percentage"],
            ["France", 65700000, 50],
            ["Germany", 81890000, 27],
            ["Poland", 38540000, 23],
          ]}
          options={{
            sizeAxis: { minValue: 0, maxValue: 100 },
            region: "155", // Western Europe
            displayMode: "markers",
            colorAxis: { colors: ["#e7711c", "#4374e0"] }, // orange to blue
          }}
          // Note: you will need to get a mapsApiKey for your project.
          // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
          mapsApiKey="YOUR_KEY_HERE"
          rootProps={{ "data-testid": "3" }}
        />
      </Card>
    );
  }
}
