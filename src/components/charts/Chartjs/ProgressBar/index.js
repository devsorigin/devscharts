/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Row, Col } from "antd";

import ProgressBar from "./ProgressBar";

export default () => (
  <Row>
    <Col span={22} offset={1}>
      <ProgressBar />
    </Col>
  </Row>
);
