import React, { Component } from "react";
import ReactSpeedometer from "react-d3-speedometer";
import { Card } from "antd";

export default class ForceRender extends Component {
  render() {
    return (
      <Card title="Force Render Speedometer">
        <div style={{ textAlign: "center" }}>
          <ReactSpeedometer forceRender={true} />
        </div>
      </Card>
    );
  }
}
