/* eslint-disable import/no-anonymous-default-export */
import React, { Fragment } from "react";
import { Route } from "react-router-dom";

import AreaCharts from "./Area";
import BarCharts from "./Bar";
import BubbleCharts from "./Bubble";
import CalenderCharts from "./Calendar";
import CandleStick from "./Candlestick";
import DiffCharts from "./Diff";
import FormatterCharts from "./Formatter";
import GanttCharts from "./Gantt";
import GeoCharts from "./Geo";
import HistogramCharts from "./Histogram";
import IntervalCharts from "./Intervals";
import LineCharts from "./Line";
import PieCharts from "./Pie";
import SankeyCharts from "./Sankey";
import ScatterCharts from "./Scatter";
import SteppedCharts from "./Stepped";
import TreeMap from "./Treemap";
import TrendLines from "./Trends";
import WordTree from "./WordTree";
import Other from "./Other";

export default () => (
  <Fragment>
    <Route exact component={AreaCharts} path="/google/area" />
    <Route exact component={BarCharts} path="/google/bar" />
    <Route exact component={BubbleCharts} path="/google/bubble" />
    <Route exact component={CalenderCharts} path="/google/calender" />
    <Route exact component={CandleStick} path="/google/candlestick" />
    <Route exact component={DiffCharts} path="/google/diff" />
    <Route exact component={FormatterCharts} path="/google/formatter" />
    <Route exact component={GanttCharts} path="/google/gantt" />
    <Route exact component={GeoCharts} path="/google/geo" />
    <Route exact component={HistogramCharts} path="/google/histogram" />
    <Route exact component={IntervalCharts} path="/google/interval" />
    <Route exact component={LineCharts} path="/google/line" />
    <Route exact component={PieCharts} path="/google/pie" />
    <Route exact component={SankeyCharts} path="/google/sankey" />
    <Route exact component={ScatterCharts} path="/google/scatter" />
    <Route exact component={SteppedCharts} path="/google/stepped" />
    <Route exact component={TreeMap} path="/google/treemap" />
    <Route exact component={TrendLines} path="/google/trend" />
    <Route exact component={WordTree} path="/google/wordtree" />
    <Route exact component={Other} path="/google/other" />
  </Fragment>
);
