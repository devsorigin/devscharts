/* eslint-disable import/no-anonymous-default-export */
import React, { Fragment } from "react";
import { Row, Col } from "antd";
import { Route } from "react-router-dom";

import Airport from "./Airport";
import APIEchart from "./APIEchart";
import Dynamic from "./Dynamic";
import Events from "./Events";
import Gauge from "./Gauge";
import Graph from "./Graph";
import Loading from "./Loading";
import Lunar from "./Lunar";
import Simple from "./Simple";
import Sunburst from "./Sunburst";
import SVGEchart from "./SVGEchart";
import Theme from "./Theme";
import Treemap from "./Treemap";

const Echarts = () => (
  <Row>
    <Col span={22} offset={1}>
      <Airport />
    </Col>
    <Col span={22} offset={1}>
      <APIEchart />
    </Col>
    <Col span={22} offset={1}>
      <Dynamic />
    </Col>
    <Col span={22} offset={1}>
      <Events />
    </Col>
    <Col span={22} offset={1}>
      <Gauge />
    </Col>
    <Col span={22} offset={1}>
      <Graph />
    </Col>
    <Col span={22} offset={1}>
      <Loading />
    </Col>
    <Col span={22} offset={1}>
      <Lunar />
    </Col>
    <Col span={22} offset={1}>
      <Simple />
    </Col>
    <Col span={22} offset={1}>
      <Sunburst />
    </Col>
    <Col span={22} offset={1}>
      <SVGEchart />
    </Col>
    <Col span={22} offset={1}>
      <Theme />
    </Col>
    <Col span={22} offset={1}>
      <Treemap />
    </Col>
  </Row>
);

export default () => (
  <Fragment>
    <Route exact component={Echarts} path="/echarts" />
  </Fragment>
);
