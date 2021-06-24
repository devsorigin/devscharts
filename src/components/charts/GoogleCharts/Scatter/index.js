/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Row, Col } from "antd";

import DualScatter from "./DualScatter";
import MDScatter from "./MDScatter";
import Scatter from "./Scatter";
import ScatterTwo from "./ScatterTwo";
import TopXScatter from "./TopXScatter";

export default () => (
  <div>
    <Row>
      <Col md={24} lg={12}>
        <MDScatter />
      </Col>
      <Col md={24} lg={12}>
        <Scatter />
      </Col>
    </Row>
    <Row>
      <Col md={24} lg={12}>
        <ScatterTwo />
      </Col>
      <Col md={24} lg={12}>
        <TopXScatter />
      </Col>
    </Row>
    <Row>
      <Col span={24}>
        <DualScatter />
      </Col>
    </Row>
  </div>
);
