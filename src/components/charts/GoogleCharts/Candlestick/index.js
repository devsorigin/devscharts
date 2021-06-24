/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Row, Col } from "antd";

import Candle from "./Candle";
import Waterfall from "./Waterfall";

export default () => (
  <Row>
    <Col md={24} lg={12}>
      <Candle />
    </Col>
    <Col md={24} lg={12}>
      <Waterfall />
    </Col>
  </Row>
);
