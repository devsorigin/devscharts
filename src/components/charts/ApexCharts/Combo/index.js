/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Row, Col } from "antd";

import LineArea from "./LineArea";
import LineColArea from "./LineColArea";
import LineScatter from "./LineScatter";
import Multiple from "./Multiple";

export default () => (
  <Row>
    <Col span={22} offset={1}>
      <LineArea />
    </Col>
    <Col span={22} offset={1}>
      <LineColArea />
    </Col>
    <Col span={22} offset={1}>
      <LineScatter />
    </Col>
    <Col span={22} offset={1}>
      <Multiple />
    </Col>
  </Row>
);
