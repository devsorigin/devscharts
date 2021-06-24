/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Row, Col } from "antd";

import ConnectNulls from "./ConnectNulls";
import Dashed from "./Dashed";
import Dot from "./Dot";
import Label from "./Label";
import AxisInterval from "./AxisInterval";
import XAxisPadding from "./XAxisPadding";
import MultiSeries from "./MultiSeries";
import Reference from "./Reference";
import Simple from "./Simple";
import Sync from "./Sync";
import Tiny from "./Tiny";
import VerticalWSpec from "./VerticalWSpec";
import Vertical from "./Vertical";
import Zoom from "./Zoom";

export default () => (
  <div>
    <Row>
      <Col md={24} lg={12}>
        <ConnectNulls />
      </Col>
      <Col md={24} lg={12}>
        <Dashed />
      </Col>
    </Row>
    <Row>
      <Col md={24} lg={12}>
        <Dot />
      </Col>
      <Col md={24} lg={12}>
        <XAxisPadding />
      </Col>
    </Row>
    <Row>
      <Col md={24} lg={12}>
        <MultiSeries />
      </Col>
      <Col md={24} lg={12}>
        <Reference />
      </Col>
    </Row>
    <Row>
      <Col md={24} lg={12}>
        <Row>
          <Col>
            <Simple />
          </Col>
          <Col>
            <Tiny />
          </Col>
        </Row>
      </Col>
      <Col md={24} lg={12}>
        <Sync />
      </Col>
    </Row>
    <Row>
      <Col md={24} lg={12}>
        <AxisInterval />
      </Col>
      <Col md={24} lg={12}>
        <Label />
      </Col>
    </Row>
    <Row>
      <Col md={24} lg={12}>
        <Vertical />
      </Col>
      <Col md={24} lg={12}>
        <VerticalWSpec />
      </Col>
    </Row>
    <Row>
      <Col span={24}>
        <Zoom />
      </Col>
    </Row>
  </div>
);
