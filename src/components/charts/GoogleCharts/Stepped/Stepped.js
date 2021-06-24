/* eslint-disable import/no-anonymous-default-export */
import React, { Component } from "react";
import { Chart } from "react-google-charts";
import { Card } from "antd";

export default class extends Component {
  render() {
    return (
      <Card title="Stepped Area Chart">
        <Chart
          width={"100%"}
          height={"400px"}
          chartType="SteppedAreaChart"
          loader={<div>Loading Chart</div>}
          data={[
            ["Director (Year)", "Rotten Tomatoes", "IMDB"],
            ["Alfred Hitchcock (1935)", 8.4, 7.9],
            ["Ralph Thomas (1959)", 6.9, 6.5],
            ["Don Sharp (1978)", 6.5, 6.4],
            ["James Hawes (2008)", 4.4, 6.2],
          ]}
          options={{
            title: "The decline of 'The 39 Steps'",
            vAxis: { title: "Accumulated Rating" },
            isStacked: true,
          }}
          rootProps={{ "data-testid": "1" }}
        />
      </Card>
    );
  }
}
