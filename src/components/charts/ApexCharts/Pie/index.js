/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Row, Col } from "antd";

import Simple from "./Simple";
import Donut from "./Donut";
import Gradient from "./Gradient";
import Monochrome from "./Monochrome";
import Pattern from "./Pattern";

export default () => (
  <div>
    <Row>
      <Col md={24} lg={12}>
        <Simple />
      </Col>
      <Col md={24} lg={12}>
        <Donut />
      </Col>
    </Row>
    <Row>
      <Col md={24} lg={12}>
        <Gradient />
      </Col>
      <Col md={24} lg={12}>
        <Pattern />
      </Col>
    </Row>
    <Row>
      <Col span={24}>
        <Monochrome />
      </Col>
    </Row>
  </div>
);
