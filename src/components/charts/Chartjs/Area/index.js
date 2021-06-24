/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Row, Col } from "antd";

import BounderyEnd from "./BounderyEnd";
import BounderyOrigin from "./BounderyOrigin";
import Datasets from "./Datasets";
import Stacked from "./Stacked";

export default () => (
  <div>
    <Row>
      <Col md={24} lg={12}>
        <BounderyEnd />
      </Col>
      <Col md={24} lg={12}>
        <BounderyOrigin />
      </Col>
    </Row>
    <Row>
      <Col md={24} lg={12}>
        <Datasets />
      </Col>
      <Col md={24} lg={12}>
        <Stacked />
      </Col>
    </Row>
  </div>
);
