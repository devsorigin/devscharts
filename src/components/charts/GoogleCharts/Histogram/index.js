/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Row, Col } from "antd";

import Buckets from "./Buckets";
import Color from "./Color";
import Distribution from "./Distribution";
import Basic from "./Basic";
import Series from "./Series";

export default () => (
  <div>
    <Row>
      <Col md={24} lg={12}>
        <Buckets />
      </Col>
      <Col md={24} lg={12}>
        <Color />
      </Col>
    </Row>
    <Row>
      <Col md={24} lg={12}>
        <Distribution />
      </Col>
      <Col md={24} lg={12}>
        <Series />
      </Col>
    </Row>
    <Row>
      <Col md={24} lg={12}>
        <Basic />
      </Col>
      <Col md={24} lg={12}>
        <Buckets />
      </Col>
    </Row>
  </div>
);
