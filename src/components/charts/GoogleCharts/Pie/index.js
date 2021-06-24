/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Row, Col } from "antd";

import Donut from "./Donut";
import Exploded from "./Exploded";
import SliceRemoved from "./SliceRemoved";
import Rotate from "./Rotate";
import Simple from "./Simple";
import ThreeD from "./ThreeD";
import Threshold from "./Threshold";

export default () => (
  <div>
    <Row>
      <Col md={24} lg={12}>
        <Donut />
      </Col>
      <Col md={24} lg={12}>
        <Rotate />
      </Col>
    </Row>
    <Row>
      <Col md={24} lg={12}>
        <SliceRemoved />
      </Col>
      <Col md={24} lg={12}>
        <Exploded />
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
      <Col md={24} lg={12}>
        <Exploded />
      </Col>
      <Col md={24} lg={12}>
        <Threshold />
      </Col>
    </Row>
  </div>
);
