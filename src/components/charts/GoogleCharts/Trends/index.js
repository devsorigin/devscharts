/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Row, Col } from "antd";

import Expo from "./Expo";
import Linear from "./Linear";
import Opacity from "./Opacity";
import Polynomial from "./Polynomial";

export default () => (
  <div>
    <Row>
      <Col md={24} lg={12}>
        <Expo />
      </Col>
      <Col md={24} lg={12}>
        <Linear />
      </Col>
    </Row>
    <Row>
      <Col md={24} lg={12}>
        <Opacity />
      </Col>
      <Col md={24} lg={12}>
        <Polynomial />
      </Col>
    </Row>
  </div>
);
