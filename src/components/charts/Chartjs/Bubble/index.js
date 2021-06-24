/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Row, Col } from "antd";

import BasicBubble from "./BasicBubble";

export default () => (
  <Row>
    <Col span={22} offset={1}>
      <BasicBubble />
    </Col>
  </Row>
);
