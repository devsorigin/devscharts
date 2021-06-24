/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Row, Col } from "antd";

import BasicLine from "./BasicLine";
import Interpolation from "./Interpolation";
import LineStyles from "./LineStyles";
import MultiAxis from "./MultiAxis";
import PointCircle from "./PointCircle";
import PointLine from "./PointLine";
import PointRect from "./PointRect";
import PointSize from "./PointSize";
import PointStart from "./PointStart";
import Stepped from "./Stepped";

export default () => (
  <div>
    <Row>
      <Col md={24} lg={12}>
        <BasicLine />
      </Col>
      <Col md={24} lg={12}>
        <Interpolation />
      </Col>
    </Row>
    <Row>
      <Col md={24} lg={12}>
        <LineStyles />
      </Col>
      <Col md={24} lg={12}>
        <MultiAxis />
      </Col>
    </Row>
    <Row>
      <Col md={24} lg={12}>
        <PointCircle />
      </Col>
      <Col md={24} lg={12}>
        <PointLine />
      </Col>
    </Row>
    <Row>
      <Col md={24} lg={12}>
        <PointRect />
      </Col>
      <Col md={24} lg={12}>
        <PointSize />
      </Col>
      <Row />
      <Col md={24} lg={12}>
        <PointStart />
      </Col>
      <Col md={24} lg={12}>
        <Stepped />
      </Col>
    </Row>
  </div>
);
