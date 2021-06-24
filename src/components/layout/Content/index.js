/* eslint-disable import/no-anonymous-default-export */
import React, { Component } from "react";
import { Layout } from "antd";
import { Switch } from "react-router-dom";

import Charts from "../../charts";

export default class extends Component {
  render() {
    return (
      <Layout>
        <div style={{ margin: 15 }}>
          <Switch>
            <Charts />
          </Switch>
        </div>
      </Layout>
    );
  }
}
