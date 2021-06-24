/* eslint-disable import/no-anonymous-default-export */
import React, { Component } from "react";
import { PieChart, Pie, Tooltip } from "recharts";
import { Card } from "antd";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
  { name: "Group E", value: 278 },
  { name: "Group F", value: 189 },
];

export default class SimplePie extends Component {
  render() {
    return (
      <Card title="Simple Pie Chart">
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data}
            cx={200}
            cy={200}
            outerRadius={130}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
      </Card>
    );
  }
}
