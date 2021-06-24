/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Row, Col } from "antd";

import Custom from "./Custom";
import Simple from "./Simple";

export default () => (
  <Row>
    <Col md={24} lg={12}>
      <Custom />
    </Col>
    <Col md={24} lg={12}>
      <Simple />
    </Col>
  </Row>
);
