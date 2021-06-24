/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Row, Col } from "antd";

import Negative from "./Negative";
import Simple from "./Simple";

export default () => (
  <Row>
    <Col span={22} offset={1}>
      <Negative />
    </Col>
    <Col span={22} offset={1}>
      <Simple />
    </Col>
  </Row>
);
