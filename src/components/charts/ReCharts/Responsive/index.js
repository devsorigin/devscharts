/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Row, Col } from "antd";

import Area from "./Area";
import Composed from "./Composed";
import Pie from "./Pie";

export default () => (
  <Row>
    <Col lg={12}>
      <Area />
    </Col>
    <Col lg={12}>
      <Composed />
    </Col>
    <Col span={24}>
      <Pie />
    </Col>
  </Row>
);
