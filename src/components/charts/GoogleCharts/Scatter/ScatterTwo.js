/* eslint-disable import/no-anonymous-default-export */
import React, { Component } from "react";
import { Chart } from "react-google-charts";
import { Card } from "antd";

export default class extends Component {
  render() {
    return (
      <Card title="Scatter Two Chart">
        <Chart
          width={"100%"}
          height={400}
          chartType="Scatter"
          loader={<div>Loading Chart</div>}
          data={[
            ["Hours Studied", "Final"],
            [0, 67],
            [1, 88],
            [2, 77],
            [3, 93],
            [4, 85],
            [5, 91],
            [6, 71],
            [7, 78],
            [8, 93],
            [9, 80],
            [10, 82],
            [0, 75],
            [5, 80],
            [3, 90],
            [1, 72],
            [5, 75],
            [6, 68],
            [7, 98],
            [3, 82],
            [9, 94],
            [2, 79],
            [2, 95],
            [2, 86],
            [3, 67],
            [4, 60],
            [2, 80],
            [6, 92],
            [2, 81],
            [8, 79],
            [9, 83],
            [3, 75],
            [1, 80],
            [3, 71],
          ]}
          options={{
            // Material design options
            chart: {
              title: "Students' Final Grades",
              subtitle: "based on hours studied",
            },
            hAxis: { title: "Hours Studied" },
            vAxis: { title: "Grade" },
          }}
        />
      </Card>
    );
  }
}
