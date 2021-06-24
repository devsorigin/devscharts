/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Row, Col } from "antd";

import Domain from "./Domain";
import Simple from "./Simple";

export default () => (
  <Row>
    <Col md={24} lg={12}>
      <Domain />
    </Col>
    <Col md={24} lg={12}>
      <Simple />
    </Col>
  </Row>
);
