/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Card } from "antd";
import ReactApexChart from "react-apexcharts";

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [67],
      options: {
        plotOptions: {
          radialBar: {
            hollow: {
              margin: 15,
              size: "70%",
              image: "../../assets/images/clock.png",
              imageWidth: 64,
              imageHeight: 64,
              imageClipped: false,
            },
            dataLabels: {
              name: {
                show: false,
                color: "#fff",
              },
              value: {
                show: true,
                color: "#333",
                offsetY: 70,
                fontSize: "22px",
              },
            },
          },
        },
        fill: {
          type: "image",
          image: {
            src: ["../../assets/images/4274635880_809a4b9d0d_z.jpg"],
          },
        },
        stroke: {
          lineCap: "round",
        },
        labels: ["Volatility"],
      },
    };
  }

  render() {
    return (
      <Card title="Radial Circle Chart">
        <div id="chart">
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="radialBar"
            height="350"
          />
        </div>
      </Card>
    );
  }
}
