/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Row, Col } from "antd";

import Color from "./Color";
import Custom from "./Custom";
import Series from "./Series";

export default () => (
  <div>
    <Row>
      <Col md={24} lg={12}>
        <Color />
      </Col>
      <Col md={24} lg={12}>
        <Custom />
      </Col>
    </Row>
    <Row>
      <Col md={24} lg={12}>
        <Series />
      </Col>
      <Col md={24} lg={12}>
        <Color />
      </Col>
    </Row>
  </div>
);
