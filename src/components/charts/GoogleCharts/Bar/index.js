/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Row, Col } from "antd";

import Basic from "./Basic";
import Label from "./Label";
import MDBar from "./MDBar";
import RightYAxis from "./RightYAxis";
import Stacked from "./Stacked";

export default () => (
  <div>
    <Row>
      <Col md={24} lg={12}>
        <Basic />
      </Col>
      <Col md={24} lg={12}>
        <RightYAxis />
      </Col>
    </Row>
    <Row>
      <Col md={24} lg={12}>
        <MDBar />
      </Col>
      <Col md={24} lg={12}>
        <Stacked />
      </Col>
    </Row>
    <Row>
      <Col md={24} lg={12}>
        <Label />
      </Col>
      <Col md={24} lg={12}>
        <MDBar />
      </Col>
    </Row>
  </div>
);
