/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Row, Col } from "antd";

import Bubble from "./Bubble";
import Combo from "./Combo";
import Simple from "./Simple";
import Organization from "./Organization";
import Table from "./Table";
import TimeLine from "./TimeLine";

export default () => (
  <div>
    <Row>
      <Col md={24} lg={12}>
        <Bubble />
      </Col>
      <Col md={24} lg={12}>
        <TimeLine />
      </Col>
    </Row>
    <Row>
      <Col md={24} lg={12}>
        <Combo />
      </Col>
      <Col md={24} lg={12}>
        <Organization />
      </Col>
    </Row>
    <Row>
      <Col md={24} lg={12}>
        <Table />
      </Col>
      <Col md={24} lg={12}>
        <Simple />
      </Col>
    </Row>
  </div>
);
