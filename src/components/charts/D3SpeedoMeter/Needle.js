import React, { Component } from "react";
import ReactSpeedometer from "react-d3-speedometer";
import { Card } from "antd";

export default class Needle extends Component {
  render() {
    return (
      <Card title="Needle Speedometer">
        <div style={{ textAlign: "center" }}>
          <ReactSpeedometer
            value={333}
            needleTransitionDuration={4000}
            needleTransition="easeElastic"
          />
        </div>
      </Card>
    );
  }
}
