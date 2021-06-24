/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Row, Col } from "antd";

import CustomTooltip from "./CustomTooltip";
import Legend from "./Legend";
import Simple from "./Simple";

export default () => (
  <div>
    <Row>
      <Col md={24} lg={12}>
        <CustomTooltip />
      </Col>
      <Col md={24} lg={12}>
        <Legend />
      </Col>
    </Row>
    <Row>
      <Col span={24}>
        <Simple />
      </Col>
    </Row>
  </div>
);
