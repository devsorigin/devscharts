/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Row, Col } from "antd";

import Basic from "./Basic";
import Datetime from "./Datetime";

export default () => (
  <Row>
    <Col span={22} offset={1}>
      <Basic />
    </Col>
    <Col span={22} offset={1}>
      <Datetime />
    </Col>
  </Row>
);
