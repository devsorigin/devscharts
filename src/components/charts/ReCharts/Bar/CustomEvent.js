/* eslint-disable import/no-anonymous-default-export */
import React, { Component } from "react";
import { Card } from "antd";
import { BarChart, Bar, Cell } from "recharts";

export default class extends Component {
  state = {
    data: [
      {
        name: "Page A",
        uv: 4000,
        pv: 2400,
        amt: 2400,
      },
      {
        name: "Page B",
        uv: 3000,
        pv: 1398,
        amt: 2210,
      },
      {
        name: "Page C",
        uv: 2000,
        pv: 9800,
        amt: 2290,
      },
      {
        name: "Page D",
        uv: 2780,
        pv: 3908,
        amt: 2000,
      },
      {
        name: "Page E",
        uv: 1890,
        pv: 4800,
        amt: 2181,
      },
      {
        name: "Page F",
        uv: 2390,
        pv: 3800,
        amt: 2500,
      },
      {
        name: "Page G",
        uv: 3490,
        pv: 4300,
        amt: 2100,
      },
    ],
    activeIndex: 0,
  };

  handleClick = (data, index) => {
    this.setState({
      activeIndex: index,
    });
  };

  render() {
    const { activeIndex, data } = this.state;
    const activeItem = data[activeIndex];

    return (
      <Card title="Custom Event Bar Chart">
        <p>Click each rectangle </p>
        <BarChart width={150} height={40} data={data}>
          <Bar dataKey="uv" onClick={this.handleClick}>
            {data.map((entry, index) => (
              <Cell
                cursor="pointer"
                fill={index === activeIndex ? "#82ca9d" : "#8884d8"}
                key={`cell-${index}`}
              />
            ))}
          </Bar>
        </BarChart>
        <p className="content">{`Uv of "${activeItem.name}": ${activeItem.uv}`}</p>
      </Card>
    );
  }
}
