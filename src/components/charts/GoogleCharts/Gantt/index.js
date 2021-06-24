/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Row, Col } from "antd";

import Computed from "./Computed";
import CriticalPath from "./CriticalPath";
import Gantt from "./Gantt";
import Group from "./Group";
import NoDep from "./NoDep";
import StylingArrows from "./StylingArrows";
import StylingTracks from "./StylingTracks";

export default () => (
  <div>
    <Row>
      <Col md={24} lg={12}>
        <Computed />
      </Col>
      <Col md={24} lg={12}>
        <CriticalPath />
      </Col>
    </Row>
    <Row>
      <Col md={24} lg={12}>
        <Gantt />
      </Col>
      <Col md={24} lg={12}>
        <Group />
      </Col>
    </Row>
    <Row>
      <Col md={24} lg={12}>
        <StylingArrows />
      </Col>
      <Col md={24} lg={12}>
        <StylingTracks />
      </Col>
    </Row>
    <Row>
      <Col span={24}>
        <NoDep />
      </Col>
    </Row>
  </div>
);
