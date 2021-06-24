/* eslint-disable import/no-anonymous-default-export */
import React, { Component } from "react";
import { Chart } from "react-google-charts";
import { Card } from "antd";

export default class extends Component {
  render() {
    return (
      <Card title="Stacked Bar Chart">
        <Chart
          width={"100%"}
          height={"300px"}
          chartType="BarChart"
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
            title: "Population of Largest U.S. Cities",
            chartArea: { width: "50%" },
            isStacked: true,
            hAxis: {
              title: "Total Population",
              minValue: 0,
            },
            vAxis: {
              title: "City",
            },
          }}
          // For tests
          rootProps={{ "data-testid": "3" }}
        />
      </Card>
    );
  }
}
