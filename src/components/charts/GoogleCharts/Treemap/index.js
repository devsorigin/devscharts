/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Row, Col } from "antd";

import Custom from "./Custom";
import Highlighted from "./Highlighted";
import TreeMap from "./TreeMap";

export default () => (
  <div>
    <Row>
      <Col md={24} lg={12}>
        <Custom />
      </Col>
      <Col md={24} lg={12}>
        <TreeMap />
      </Col>
    </Row>
    <Row>
      <Col span={24}>
        <Highlighted />
      </Col>
    </Row>
  </div>
);
