import React, { Component } from "react";
import ReactSpeedometer from "react-d3-speedometer";
import { Card } from "antd";

export default class ForceMultiple extends Component {
  render() {
    return (
      <Card title="Multiple Force Speedometer">
        <div style={{ textAlign: "center" }}>
          <ReactSpeedometer forcerender={true} />
          <ReactSpeedometer forcerender={true} />
          <ReactSpeedometer forcerender={true} />
        </div>
      </Card>
    );
  }
}
