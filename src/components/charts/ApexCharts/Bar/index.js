/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Row, Col } from "antd";

import Basic from "./Basic";
import Datalabels from "./Datalabels";
import Stacked from "./Stacked";
import Negative from "./Negative";
import Pattern from "./Pattern";
import Group from "./Group";

export default () => (
  <div>
    <Row>
      <Col span={22} offset={1}>
        <Basic />
      </Col>
      <Col span={22} offset={1}>
        <Datalabels />
      </Col>
      <Col span={22} offset={1}>
        <Stacked />
      </Col>
      <Col span={22} offset={1}>
        <Negative />
      </Col>
      <Col span={22} offset={1}>
        <Pattern />
      </Col>
      <Col span={22} offset={1}>
        <Group />
      </Col>
    </Row>
  </div>
);
