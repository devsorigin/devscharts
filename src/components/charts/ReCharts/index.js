/* eslint-disable import/no-anonymous-default-export */
import React, { Fragment } from "react";
import { Route } from "react-router-dom";

import AreaCharts from "./Area";
import BarChart from "./Bar";
import ComposedChart from "./Composed";
import LineChart from "./Line";
import PieChart from "./Pie";
import RadarChart from "./Radar";
import ResponsiveChart from "./Responsive";
import ScatterChart from "./Scatter";
import TreeMapChart from "./TreeMap";
import Others from "./Others";

export default () => (
  <Fragment>
    <Route exact component={AreaCharts} path="/" />
    <Route exact component={BarChart} path="/recharts/bar" />
    <Route exact component={ComposedChart} path="/recharts/composed" />
    <Route exact component={LineChart} path="/recharts/line" />
    <Route exact component={PieChart} path="/recharts/pie" />
    <Route exact component={RadarChart} path="/recharts/radar" />
    <Route exact component={ResponsiveChart} path="/recharts/responsive" />
    <Route exact component={ScatterChart} path="/recharts/scatter" />
    <Route exact component={TreeMapChart} path="/recharts/treemap" />
    <Route exact component={Others} path="/recharts/others" />
  </Fragment>
);
