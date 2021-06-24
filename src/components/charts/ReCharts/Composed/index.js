/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Row, Col } from "antd";

import Labels from "./Labels";
import Line from "./Line";
import SameData from "./SameData";
import Vertical from "./Vertical";

export default () => (
  <div>
    <Row>
      <Col md={24} lg={12}>
        <Labels />
      </Col>
      <Col md={24} lg={12}>
        <Line />
      </Col>
    </Row>
    <Row>
      <Col md={24} lg={12}>
        <SameData />
      </Col>
      <Col md={24} lg={12}>
        <Vertical />
      </Col>
    </Row>
  </div>
);
