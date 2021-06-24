/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Row, Col } from "antd";

import Custom from "./Custom";
import Multilevel from "./Multilevel";
import Sankey from "./Sankey";

export default () => (
  <Row>
    <Col span={22} offset={1}>
      <Custom />
    </Col>
    <Col span={22} offset={1}>
      <Multilevel />
    </Col>
    <Col span={22} offset={1}>
      <Sankey />
    </Col>
  </Row>
);
