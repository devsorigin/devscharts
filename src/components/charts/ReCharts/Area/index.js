/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Row, Col } from "antd";

import FillByValue from "./FillByValue";
import Cardinal from "./Cardinal";
import ConnectNulls from "./ConnectNulls";
import Percent from "./Percent";
import Simple from "./Simple";
import Stacked from "./Stacked";

export default () => (
  <div>
    <Row>
      <Col md={24} lg={12}>
        <FillByValue />
      </Col>
      <Col md={24} lg={12}>
        <Cardinal />
      </Col>
    </Row>
    <Row>
      <Col md={24} lg={12}>
        <ConnectNulls />
      </Col>
      <Col md={24} lg={12}>
        <Percent />
      </Col>
    </Row>
    <Row>
      <Col md={24} lg={12}>
        <Simple />
      </Col>
      <Col md={24} lg={12}>
        <Stacked />
      </Col>
    </Row>
  </div>
);
