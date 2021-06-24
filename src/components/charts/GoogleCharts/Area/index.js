/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Row, Col } from "antd";

import Simple from "./Simple";
import FullStacked from "./FullStacked";
import Stacked from "./Stacked";

export default () => (
  <div>
    <Row>
      <Col md={24} lg={12}>
        <Simple />
      </Col>
      <Col md={24} lg={12}>
        <FullStacked />
      </Col>
    </Row>
    <Row>
      <Col md={24} lg={12}>
        <Stacked />
      </Col>
      <Col md={24} lg={12}>
        <Stacked />
      </Col>
    </Row>
  </div>
);
