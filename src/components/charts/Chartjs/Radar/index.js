/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Row, Col } from "antd";

import Radar from "./Radar";

export default () => (
  <Row>
    <Col span={22} offset={1}>
      <Radar />
    </Col>
  </Row>
);
