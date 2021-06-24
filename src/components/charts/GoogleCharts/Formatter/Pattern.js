/* eslint-disable import/no-anonymous-default-export */
import React, { Component } from "react";
import { Chart } from "react-google-charts";
import { Card } from "antd";

export default class extends Component {
  render() {
    return (
      <Card title="Pattern Format Chart">
        <Chart
          width={"100%"}
          height={300}
          chartType="Table"
          loader={<div>Loading Chart</div>}
          data={[
            ["Name", "Email"],
            ["John Lennon", "john@beatles.co.uk"],
            ["Paul McCartney", "paul@beatles.co.uk"],
            ["George Harrison", "george@beatles.co.uk"],
            ["Ringo Starr", "ringo@beatles.co.uk"],
          ]}
          formatters={[
            {
              type: "PatternFormat",
              column: [0, 1],
              options: '<a href="mailto:{1}">{0}</a>',
            },
          ]}
          options={{
            allowHtml: true,
            showRowNumber: true,
          }}
          rootProps={{ "data-testid": "6" }}
        />
      </Card>
    );
  }
}
