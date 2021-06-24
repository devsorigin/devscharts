/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Row, Col } from "antd";

import Basic from "./Basic";
import Line from "./Line";
import Dual from "./Dual";
import MDDual from "./MDDual";
import MDLine from "./MDLine";
import Multiple from "./Multiple";

export default () => (
  <div>
    <Row>
      <Col md={24} lg={12}>
        <Line />
      </Col>
      <Col md={24} lg={12}>
        <Dual />
      </Col>
    </Row>
    <Row>
      <Col md={24} lg={12}>
        <Basic />
      </Col>
      <Col md={24} lg={12}>
        <Multiple />
      </Col>
    </Row>
    <Row>
      <Col span={24}>
        <MDDual />
      </Col>
      <Col span={24}>
        <MDLine />
      </Col>
    </Row>
  </div>
);
