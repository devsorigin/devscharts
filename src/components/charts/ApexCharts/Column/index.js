/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Row, Col } from "antd";

import Datalebels from "./Datalebels";
import Stacked from "./Stacked";
import Rotatedlebels from "./Rotatedlebels";
import Negative from "./Negative";
// import Loaded from './Loaded';
import Distributed from "./Distributed";

export default () => (
  <Row>
    <Col span={22} offset={1}>
      <Datalebels />
    </Col>
    <Col span={22} offset={1}>
      <Stacked />
    </Col>
    <Col span={22} offset={1}>
      <Rotatedlebels />
    </Col>
    <Col span={22} offset={1}>
      <Negative />
    </Col>
    {/* <Col span={24}>
      <Loaded />
    </Col> */}
    <Col span={22} offset={1}>
      <Distributed />
    </Col>
  </Row>
);
