/* eslint-disable import/no-anonymous-default-export */
import React, { Component } from "react";
import { Layout } from "antd";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";

export default class extends Component {
  state = {
    collapsed: false,
  };

  componentDidMount() {
    window.addEventListener("resize", this.turnMiniMenu);
    this.turnMiniMenu();
  }

  turnMiniMenu = () => {
    if (window.outerWidth < 768) {
      this.setState({
        collapsed: true,
      });
    } else {
      this.setState({
        collapsed: false,
      });
    }
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sidebar collapsed={this.state.collapsed} />
        <Layout>
          <Header collapsed={this.state.collapsed} toggle={this.toggle} />
          <Content />
          <Footer />
        </Layout>
      </Layout>
    );
  }
}
