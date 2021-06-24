/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Row, Col } from "antd";

import Background from "./Background";
import Biaxial from "./Biaxial";
import Brush from "./Brush";
import CustomShape from "./CustomShape";
import MinHeight from "./MinHeight";
import Mix from "./Mix";
import PnNBar from "./PnNBar";
import Simple from "./Simple";
import Stacked from "./Stacked";
import Signature from "./Signature";

export default () => (
  <div>
    <Row>
      <Col md={24} lg={12}>
        <Background />
      </Col>
      <Col md={24} lg={12}>
        <Biaxial />
      </Col>
    </Row>
    <Row>
      <Col md={24} lg={12}>
        <CustomShape />
      </Col>
      <Col md={24} lg={12}>
        <MinHeight />
      </Col>
    </Row>
    <Row>
      <Col md={24} lg={12}>
        <Mix />
      </Col>
      <Col md={24} lg={12}>
        <PnNBar />
      </Col>
    </Row>
    <Row>
      <Col md={24} lg={12}>
        <Simple />
      </Col>
      <Col md={24} lg={12}>
        <Stacked />
      </Col>
    </Row>
    <Row>
      <Col md={24} lg={12}>
        <Signature />
      </Col>
      <Col md={24} lg={12}>
        <Brush />
      </Col>
    </Row>
  </div>
);
