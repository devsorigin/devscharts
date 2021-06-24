import React, { Component } from "react";
import ReactSpeedometer from "react-d3-speedometer";
import { Card } from "antd";

export default class Custom extends Component {
  render() {
    return (
      <Card title="Custom Value Speedometer">
        <div style={{ textAlign: "center" }}>
          <ReactSpeedometer
            className="chart"
            value={333}
            needleTransitionDuration={4000}
            needleTransition="easeElastic"
            // eslint-disable-next-line no-template-curly-in-string
            currentValueText="Current Value: ${value}"
          />
        </div>
      </Card>
    );
  }
}
