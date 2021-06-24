/* eslint-disable import/no-anonymous-default-export */
import React, { Component } from "react";
import { Layout } from "antd";

const { Footer } = Layout;

export default class extends Component {
  render() {
    return (
      <Footer style={{ textAlign: "center" }}>
        DevsCharts for React &copy; Created with{" "}
        <span role="img" aria-label="heart">
          ❤️
        </span>{" "}
        by{" "}
        <a
          href="https://devsorigin.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          DevsOrigin
        </a>
      </Footer>
    );
  }
}
