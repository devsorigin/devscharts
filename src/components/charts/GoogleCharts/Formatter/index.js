/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Row, Col } from "antd";

import Arrow from "./Arrow";
import Bar from "./Bar";
import Color from "./Color";
import DateFormatter from "./DateFormatter";
import NumberFormatter from "./NumberFormatter";
import Pattern from "./Pattern";

export default () => (
  <div>
    <Row>
      <Col md={24} lg={12}>
        <NumberFormatter />
      </Col>
      <Col md={24} lg={12}>
        <Pattern />
      </Col>
    </Row>
    <Row>
      <Col md={24} lg={12}>
        <Bar />
      </Col>
      <Col md={24} lg={12}>
        <Color />
      </Col>
    </Row>
    <Row>
      <Col md={24} lg={12}>
        <DateFormatter />
      </Col>
      <Col md={24} lg={12}>
        <Arrow />
      </Col>
    </Row>
  </div>
);
