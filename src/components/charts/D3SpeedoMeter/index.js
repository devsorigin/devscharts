/* eslint-disable import/no-anonymous-default-export */
import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import { Col, Row } from "antd";

import Custom from "./Custom";
import Fluid from "./Fluid";
import ForceMultiple from "./ForceMultiple";
import ForceRender from "./ForceRender";
import Multiple from "./Multiple";
import Needle from "./Needle";
import Speedometer from "./Speedometer";
import Values from "./Values";

const D3speedometer = () => (
  <div>
    <Row>
      <Col sm={24} lg={12}>
        <Custom />
      </Col>
      <Col sm={24} lg={12}>
        <Fluid />
      </Col>
    </Row>
    <Row>
      <Col sm={24} lg={12}>
        <ForceRender />
      </Col>
      <Col sm={24} lg={12}>
        <Needle />
      </Col>
    </Row>
    <Row>
      <Col sm={24} lg={12}>
        <Speedometer />
      </Col>
      <Col sm={24} lg={12}>
        <Values />
      </Col>
    </Row>
    <Row>
      <Col sm={24} lg={12}>
        <ForceMultiple />
      </Col>
      <Col sm={24} lg={12}>
        <Multiple />
      </Col>
    </Row>
  </div>
);

export default () => (
  <Fragment>
    <Route exact component={D3speedometer} path="/d3speedometer" />
  </Fragment>
);
