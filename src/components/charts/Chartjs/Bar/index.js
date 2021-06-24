/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Row, Col } from "antd";

import HorizontalBar from "./HorizontalBar";
import StalkedChart from "./StalkedChart";
import VerticalBar from "./VerticalBar";

export default () => (
  <div>
    <Row>
      <Col span={22} offset={1}>
        <HorizontalBar />
      </Col>
      <Col span={22} offset={1}>
        <StalkedChart />
      </Col>
      <Col span={22} offset={1}>
        <VerticalBar />
      </Col>
    </Row>
  </div>
);
