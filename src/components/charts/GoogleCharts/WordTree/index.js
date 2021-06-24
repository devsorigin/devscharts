/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Row, Col } from "antd";

import Explicit from "./Explicit";
import WordTree from "./WordTree";

export default () => (
  <Row>
    <Col md={24} lg={12}>
      <Explicit />
    </Col>
    <Col md={24} lg={12}>
      <WordTree />
    </Col>
  </Row>
);
