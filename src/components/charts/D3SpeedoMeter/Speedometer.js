import React, { Component } from "react";
import ReactSpeedometer from "react-d3-speedometer";
import { Card } from "antd";

export default class Speedometer extends Component {
  render() {
    return (
      <Card title="Basic Speedometer">
        <div style={{ textAlign: "center" }}>
          <ReactSpeedometer
            maxValue={500}
            value={473}
            needleColor="red"
            startColor="green"
            segments={10}
            endColor="blue"
          />
        </div>
      </Card>
    );
  }
}
