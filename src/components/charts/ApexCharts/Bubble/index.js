/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Row, Col } from "antd";

import Simple from "./Simple";
import ThreeDBubble from "./ThreeDBubble";

export default () => (
  <Row>
    <Col span={22} offset={1}>
      <Simple />
    </Col>
    <Col span={22} offset={1}>
      <ThreeDBubble />
    </Col>
  </Row>
);
