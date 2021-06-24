/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Row, Col } from "antd";

import DiffBar from "./DiffBar";
import DiffColumn from "./DiffColumn";
import DiffPie from "./DiffPie";
import DiffScatter from "./DiffScatter";

export default () => (
  <div>
    <Row>
      <Col md={24} lg={12}>
        <DiffBar />
      </Col>
      <Col md={24} lg={12}>
        <DiffColumn />
      </Col>
    </Row>
    <Row>
      <Col md={24} lg={12}>
        <DiffPie />
      </Col>
      <Col md={24} lg={12}>
        <DiffScatter />
      </Col>
    </Row>
  </div>
);
