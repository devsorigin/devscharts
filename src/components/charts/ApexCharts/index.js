/* eslint-disable import/no-anonymous-default-export */
import React, { Fragment } from "react";
import { Route } from "react-router-dom";

import AreaCharts from "./Area";
import BarCharts from "./Bar";
import BubbleCharts from "./Bubble";
import CandleCharts from "./CandleStick";
import CircleCharts from "./Circle";
import ColumnCharts from "./Column";
import ComboCharts from "./Combo";
import HeatmapCharts from "./Heatmap";
import LineCharts from "./Line";
import PieCharts from "./Pie";
import RadarCharts from "./Radar";
import ScatterCharts from "./Scatter";

export default () => (
  <Fragment>
    <Route exact component={AreaCharts} path="/apex/area" />
    <Route exact component={BarCharts} path="/apex/bar" />
    <Route exact component={BubbleCharts} path="/apex/bubble" />
    <Route exact component={CandleCharts} path="/apex/candle" />
    <Route exact component={CircleCharts} path="/apex/circle" />
    <Route exact component={ColumnCharts} path="/apex/column" />
    <Route exact component={ComboCharts} path="/apex/combo" />
    <Route exact component={HeatmapCharts} path="/apex/heatmap" />
    <Route exact component={LineCharts} path="/apex/line" />
    <Route exact component={PieCharts} path="/apex/pie" />
    <Route exact component={RadarCharts} path="/apex/radar" />
    <Route exact component={ScatterCharts} path="/apex/scatter" />
  </Fragment>
);
