/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Row, Col } from "antd";

import Color from "./Color";
import Marker from "./Marker";
import Proportional from "./Proportional";
import Region from "./Region";

export default () => (
  <div>
    <Row>
      <Col md={24} lg={12}>
        <Color />
      </Col>
      <Col md={24} lg={12}>
        <Marker />
      </Col>
    </Row>
    <Row>
      <Col md={24} lg={12}>
        <Proportional />
      </Col>
      <Col md={24} lg={12}>
        <Region />
      </Col>
    </Row>
  </div>
);
