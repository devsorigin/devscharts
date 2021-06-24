/* eslint-disable import/no-anonymous-default-export */
import React, { Component } from "react";
import { Chart } from "react-google-charts";
import { Card } from "antd";

export default class extends Component {
  render() {
    return (
      <Card title="Simple Word Tree Chart">
        <Chart
          width={"100%"}
          height={"300px"}
          chartType="WordTree"
          loader={<div>Loading Chart</div>}
          data={[
            ["Phrases"],
            ["cats are better than dogs"],
            ["cats eat kibble"],
            ["cats are better than hamsters"],
            ["cats are awesome"],
            ["cats are people too"],
            ["cats eat mice"],
            ["cats meowing"],
            ["cats in the cradle"],
            ["cats eat mice"],
            ["cats in the cradle lyrics"],
            ["cats eat kibble"],
            ["cats for adoption"],
            ["cats are family"],
            ["cats eat mice"],
            ["cats are better than kittens"],
            ["cats are evil"],
            ["cats are weird"],
            ["cats eat mice"],
          ]}
          options={{
            wordtree: {
              format: "implicit",
              word: "cats",
            },
          }}
          rootProps={{ "data-testid": "1" }}
        />
      </Card>
    );
  }
}
