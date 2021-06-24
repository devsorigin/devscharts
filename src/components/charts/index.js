/* eslint-disable import/no-anonymous-default-export */
import React, { Fragment } from "react";

import Apex from "./ApexCharts";
import Chartjs from "./Chartjs";
import D3SpeedoMeter from "./D3SpeedoMeter";
import Echarts from "./Echarts";
import GoogleCharts from "./GoogleCharts";
import ReCharts from "./ReCharts";

export default () => (
  <Fragment>
    <Apex />
    <Chartjs />
    <D3SpeedoMeter />
    <Echarts />
    <GoogleCharts />
    <ReCharts />
  </Fragment>
);
