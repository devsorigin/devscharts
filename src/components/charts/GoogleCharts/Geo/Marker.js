/* eslint-disable import/no-anonymous-default-export */
import React, { Component } from "react";
import { Chart } from "react-google-charts";
import { Card } from "antd";

export default class extends Component {
  render() {
    return (
      <Card title="Marker Geo Chart">
        <Chart
          width={"100%"}
          height={"300px"}
          chartType="GeoChart"
          data={[
            ["City", "Population", "Area"],
            ["Rome", 2761477, 1285.31],
            ["Milan", 1324110, 181.76],
            ["Naples", 959574, 117.27],
          ]}
          options={{
            region: "IT",
            displayMode: "markers",
            colorAxis: { colors: ["green", "blue"] },
          }}
          // Note: you will need to get a mapsApiKey for your project.
          // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
          mapsApiKey="YOUR_KEY_HERE"
          rootProps={{ "data-testid": "2" }}
        />
      </Card>
    );
  }
}
