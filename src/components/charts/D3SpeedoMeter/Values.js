import React, { Component } from "react";
import ReactSpeedometer from "react-d3-speedometer";
import { Card } from "antd";

export default class Values extends Component {
  render() {
    return (
      <Card title="Configure Values Speedometer">
        <div style={{ textAlign: "center" }}>
          <ReactSpeedometer maxValue={150} value={70.7} valueFormat="d" />
        </div>
      </Card>
    );
  }
}
