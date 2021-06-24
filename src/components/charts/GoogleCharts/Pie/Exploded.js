/* eslint-disable import/no-anonymous-default-export */
import React, { Component } from "react";
import { Chart } from "react-google-charts";
import { Card } from "antd";

export default class extends Component {
  render() {
    return (
      <Card title="Exploding A Slice Pie Chart">
        <Chart
          width={"100%"}
          height={"400px"}
          chartType="PieChart"
          loader={<div>Loading Chart</div>}
          data={[
            ["Language", "Speakers (in millions)"],
            ["Assamese", 13],
            ["Bengali", 83],
            ["Bodo", 1.4],
            ["Dogri", 2.3],
            ["Gujarati", 46],
            ["Hindi", 300],
            ["Kannada", 38],
            ["Kashmiri", 5.5],
            ["Konkani", 5],
            ["Maithili", 20],
            ["Malayalam", 33],
            ["Manipuri", 1.5],
            ["Marathi", 72],
            ["Nepali", 2.9],
            ["Oriya", 33],
            ["Punjabi", 29],
            ["Sanskrit", 0.01],
            ["Santhali", 6.5],
            ["Sindhi", 2.5],
            ["Tamil", 61],
            ["Telugu", 74],
            ["Urdu", 52],
          ]}
          options={{
            title: "Indian Language Use",
            legend: "none",
            pieSliceText: "label",
            slices: {
              4: { offset: 0.2 },
              12: { offset: 0.3 },
              14: { offset: 0.4 },
              15: { offset: 0.5 },
            },
          }}
          rootProps={{ "data-testid": "5" }}
        />
      </Card>
    );
  }
}