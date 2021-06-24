/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Row, Col } from "antd";

import BasicLine from "./BasicLine";
import Brush from "./Brush";
import Datalebels from "./Datalebels";
import GradientLine from "./GradientLine";
import Missing from "./Missing";
import Realtime from "./Realtime";
import Stepline from "./Stepline";
import Synchronized from "./Synchronized";

export default () => (
  <Row>
    <Col span={22} offset={1}>
      <BasicLine />
    </Col>
    <Col span={22} offset={1}>
      <Brush />
    </Col>
    <Col span={22} offset={1}>
      <Datalebels />
    </Col>
    <Col span={22} offset={1}>
      <GradientLine />
    </Col>
    <Col span={22} offset={1}>
      <Missing />
    </Col>
    <Col span={22} offset={1}>
      <Realtime />
    </Col>
    <Col span={22} offset={1}>
      <Stepline />
    </Col>
    <Col span={22} offset={1}>
      <Synchronized />
    </Col>
  </Row>
);
