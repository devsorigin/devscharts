/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Row, Col } from "antd";

import Missing from "./Missing";
import Stalked from "./Stalked";
import Negative from "./Negative";
import Spline from "./Spline";

export default () => (
  <div>
    <Row>
      <Col md={24} lg={16}>
        <Missing />
      </Col>
      <Col md={24} lg={8}>
        <Stalked />
      </Col>
    </Row>
    <Row>
      <Col lg={12} md={24}>
        <Spline />
      </Col>
      <Col lg={12} md={24}>
        <Negative />
      </Col>
    </Row>
  </div>
);
