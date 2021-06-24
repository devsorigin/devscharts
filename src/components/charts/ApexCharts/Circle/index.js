/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Row, Col } from "antd";

import Basic from "./Basic";
import Multiple from "./Multiple";
import Radial from "./Radial";
import Stroked from "./Stroked";

export default () => (
  <div>
    <Row>
      <Col md={24} lg={12}>
        <Basic />
      </Col>
      <Col md={24} lg={12}>
        <Multiple />
      </Col>
    </Row>
    <Row>
      <Col md={24} lg={12}>
        <Radial />
      </Col>
      <Col md={24} lg={12}>
        <Stroked />
      </Col>
    </Row>
  </div>
);
