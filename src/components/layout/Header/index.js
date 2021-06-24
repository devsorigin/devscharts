/* eslint-disable import/no-anonymous-default-export */
import React, { Component } from "react";
import { Layout } from "antd";
import { MenuFoldOutlined } from "@ant-design/icons";
import Breadcrumb from "./Breadcrumb";
const { Header } = Layout;

export default class extends Component {
  render() {
    return (
      <Header style={{ background: "#fff", padding: 0, display: "flex" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "45px",
            justifyContent: "center",
            marginRight: "15px",
          }}
        >
          <MenuFoldOutlined
            className="trigger"
            type={this.props.collapsed ? "menu-unfold" : "menu-fold"}
            onClick={this.props.toggle}
          />
        </div>
        <Breadcrumb />
      </Header>
    );
  }
}
