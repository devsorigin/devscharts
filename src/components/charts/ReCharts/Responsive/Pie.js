/* eslint-disable import/no-anonymous-default-export */
import React, { Component } from "react";
import { ResponsiveContainer, PieChart, Pie } from "recharts";
import { Card } from "antd";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

export default class extends Component {
  render() {
    return (
      <Card title="Responsive Pie Chart">
        <div style={{ width: "100%", height: 300 }}>
          <ResponsiveContainer>
            <PieChart>
              <Pie dataKey="value" data={data} fill="#8884d8" label />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </Card>
    );
  }
}
