/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Row, Col } from "antd";

import Bubble from "./Bubble";
import Cell from "./Cell";
import JointLine from "./JointLine";
import Label from "./Label";
import Multi from "./Multi";
import Simple from "./Simple";
import ThreeD from "./ThreeD";

export default () => (
  <div>
    <Row>
      <Col md={24} lg={12}>
        <JointLine />
      </Col>
      <Col md={24} lg={12}>
        <Multi />
      </Col>
    </Row>
    <Row>
      <Col md={24} lg={12}>
        <Label />
      </Col>
      <Col md={24} lg={12}>
        <Cell />
      </Col>
    </Row>
    <Row>
      <Col md={24} lg={12}>
        <Simple />
      </Col>
      <Col md={24} lg={12}>
        <ThreeD />
      </Col>
    </Row>
    <Row>
      <Col span={24}>
        <Bubble />
      </Col>
    </Row>
  </div>
);
