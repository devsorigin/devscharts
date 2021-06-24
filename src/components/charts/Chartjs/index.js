/* eslint-disable import/no-anonymous-default-export */
import React, { Fragment } from "react";
import { Route } from "react-router-dom";

import AreaCharts from "./Area";
import BarCharts from "./Bar";
import BubbleCharts from "./Bubble";
import LineCharts from "./Line";
import ProgressBar from "./ProgressBar";
import Radar from "./Radar";

export default () => (
  <Fragment>
    <Route exact component={AreaCharts} path="/chartjs/area" />
    <Route exact component={BarCharts} path="/chartjs/bar" />
    <Route exact component={BubbleCharts} path="/chartjs/bubble" />
    <Route exact component={LineCharts} path="/chartjs/line" />
    <Route exact component={ProgressBar} path="/chartjs/progressbars" />
    <Route exact component={Radar} path="/chartjs/radar" />
  </Fragment>
);
