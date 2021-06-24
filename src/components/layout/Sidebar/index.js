/* eslint-disable import/no-anonymous-default-export */
import React, { Component } from "react";
import { Layout, Menu } from "antd";
import { DoubleRightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import links from "./links";

const { Sider } = Layout;
const SubMenu = Menu.SubMenu;

export default class extends Component {
  render() {
    return (
      <Sider
        theme="light"
        trigger={null}
        collapsible
        collapsed={this.props.collapsed}
      >
        <Link to="/">DevsCharts</Link>
        <Menu theme="light" mode="inline" defaultSelectedKeys={["1.1"]}>
          {links.map((item, index) => {
            if (typeof item.link === "object") {
              return (
                <SubMenu
                  key={`sub${index}`}
                  title={
                    <span>
                      <DoubleRightOutlined type={item.icon} />
                      <span>{item.name}</span>
                    </span>
                  }
                >
                  {item.link.map((innerItem, innerIndex) => {
                    return (
                      <Menu.Item key={`${index + 1}.${innerIndex + 1}`}>
                        <Link to={innerItem.link}>{innerItem.name}</Link>
                      </Menu.Item>
                    );
                  })}
                </SubMenu>
              );
            }

            return (
              <Menu.Item key={index + 1}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <DoubleRightOutlined type={item.icon} />
                  <span>
                    <Link to={item.link}>{item.name}</Link>
                  </span>
                </div>
              </Menu.Item>
            );
          })}
        </Menu>
      </Sider>
    );
  }
}
