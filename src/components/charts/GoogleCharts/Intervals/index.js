/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Row, Col } from "antd";

import Area from "./Area";
import Bar from "./Bar";
import Box from "./Box";
import Combined from "./Combined";
import Line from "./Line";
import Point from "./Point";
import Stick from "./Stick";
import Tailored from "./Tailored";

export default () => (
  <div>
    <Row>
      <Col md={24} lg={12}>
        <Area />
      </Col>
      <Col md={24} lg={12}>
        <Line />
      </Col>
    </Row>
    <Row>
      <Col md={24} lg={12}>
        <Bar />
      </Col>
      <Col md={24} lg={12}>
        <Tailored />
      </Col>
    </Row>
    <Row>
      <Col md={24} lg={12}>
        <Box />
      </Col>
      <Col md={24} lg={12}>
        <Combined />
      </Col>
    </Row>
    <Row>
      <Col md={24} lg={12}>
        <Point />
      </Col>
      <Col md={24} lg={12}>
        <Stick />
      </Col>
    </Row>
  </div>
);
