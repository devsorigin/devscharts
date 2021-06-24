import React, { Component } from "react";
import ReactSpeedometer from "react-d3-speedometer";
import { Card } from "antd";

export default class Multiple extends Component {
  render() {
    return (
      <Card title="Multiple Speedometer">
        <div style={{ textAlign: "center" }}>
          <ReactSpeedometer value={10} maxValue={200} segments={1} />
          <ReactSpeedometer value={10} maxValue={40} segments={1} />
          <ReactSpeedometer value={10} maxValue={30} segments={1} />
        </div>
      </Card>
    );
  }
}
