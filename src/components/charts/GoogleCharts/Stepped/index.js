/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Row, Col } from "antd";

import Stacked from "./Stacked";
import Stepped from "./Stepped";

export default () => (
  <Row>
    <Col md={24} lg={12}>
      <Stacked />
    </Col>
    <Col md={24} lg={12}>
      <Stepped />
    </Col>
  </Row>
);
