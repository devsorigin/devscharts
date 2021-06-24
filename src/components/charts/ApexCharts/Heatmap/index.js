/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Row, Col } from "antd";

// import Basic from './Basic';
import Color from "./Color";
import Flipped from "./Flipped";
// import Multiple from './Multiple';
import Round from "./Round";

export default () => (
  <Row>
    {/* <Col span={24}>
			<Basic />
		</Col> */}
    <Col span={22} offset={1}>
      <Color />
    </Col>
    <Col span={22} offset={1}>
      <Flipped />
    </Col>
    {/* <Col span={22} offset={1}>
			<Multiple />
		</Col> */}
    <Col span={22} offset={1}>
      <Round />
    </Col>
  </Row>
);
