/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Row, Col } from "antd";

import Label from "./Label";
import Shape from "./Shape";
import Angle from "./Angle";
import Simple from "./Simple";
import StraightAngle from "./StraightAngle";
import TwoLevel from "./TwoLevel";

export default () => (
  <div>
    <Row>
      <Col md={24} lg={12}>
        <Label />
      </Col>
      <Col md={24} lg={12}>
        <Shape />
      </Col>
    </Row>
    <Row>
      <Col md={24} lg={12}>
        <Simple />
      </Col>
      <Col md={24} lg={12}>
        <StraightAngle />
      </Col>
    </Row>
    <Row>
      <Col md={24} lg={10}>
        <TwoLevel />
      </Col>
      <Col md={24} lg={14}>
        <Angle />
      </Col>
    </Row>
  </div>
);
