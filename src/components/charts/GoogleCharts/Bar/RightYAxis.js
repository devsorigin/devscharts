/* eslint-disable import/no-anonymous-default-export */
import React, { Component } from "react";
import { Chart } from "react-google-charts";
import { Card } from "antd";

export default class extends Component {
  render() {
    return (
      <Card title="Right Y axis Bar Chart">
        <Chart
          width={"100%"}
          height={"300px"}
          // Note here we use Bar instead of BarChart to load the material design version
          chartType="Bar"
          loader={<div>Loading Chart</div>}
          data={[
            ["City", "2010 Population", "2000 Population"],
            ["New York City, NY", 8175000, 8008000],
            ["Los Angeles, CA", 3792000, 3694000],
            ["Chicago, IL", 2695000, 2896000],
            ["Houston, TX", 2099000, 1953000],
            ["Philadelphia, PA", 1526000, 1517000],
          ]}
          options={{
            // Material chart options
            chart: {
              title: "Population of Largest U.S. Cities",
              subtitle: "Based on most recent and previous census data",
            },
            hAxis: {
              title: "Total Population",
              minValue: 0,
            },
            vAxis: {
              title: "City",
            },
            bars: "horizontal",
            axes: {
              y: {
                0: { side: "right" },
              },
            },
          }}
          // For tests
          rootProps={{ "data-testid": "5" }}
        />
      </Card>
    );
  }
}
