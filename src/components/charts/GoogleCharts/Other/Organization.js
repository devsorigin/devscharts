/* eslint-disable import/no-anonymous-default-export */
import React, { Component } from "react";
import { Chart } from "react-google-charts";
import { Card } from "antd";

export default class extends Component {
  render() {
    return (
      <Card title="Organizational Chart">
        <Chart
          width={"100%"}
          height={300}
          chartType="OrgChart"
          loader={<div>Loading Chart</div>}
          data={[
            ["Name", "Manager", "ToolTip"],
            [
              {
                v: "Mike",
                f: 'Mike<div style="color:red; font-style:italic">President</div>',
              },
              "",
              "The President",
            ],
            [
              {
                v: "Jim",
                f: 'Jim<div style="color:red; font-style:italic">Vice President</div>',
              },
              "Mike",
              "VP",
            ],
            ["Alice", "Mike", ""],
            ["Bob", "Jim", "Bob Sponge"],
            ["Carol", "Bob", ""],
          ]}
          options={{
            allowHtml: true,
          }}
          rootProps={{ "data-testid": "1" }}
        />
      </Card>
    );
  }
}
