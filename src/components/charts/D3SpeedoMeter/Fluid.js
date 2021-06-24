import React, { Component } from "react";
import ReactSpeedometer from "react-d3-speedometer";
import { Card } from "antd";

export default class Fluid extends Component {
  render() {
    return (
      <Card title="Gradient Speedometer">
        <div style={{ textAlign: "center" }}>
          <ReactSpeedometer
            needleHeightRatio={0.7}
            value={333}
            maxSegmentLabels={5}
            segments={1000}
          />
        </div>
      </Card>
    );
  }
}
