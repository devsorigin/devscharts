/* eslint-disable import/no-anonymous-default-export */
import React, { Component } from "react";
import { Chart } from "react-google-charts";
import { Card } from "antd";

export default class extends Component {
  render() {
    return (
      <Card title="Distribution Histogram Chart">
        <Chart
          width={"100%"}
          height={"300px"}
          chartType="Histogram"
          loader={<div>Loading Chart</div>}
          data={[
            ["Dinosaur", "Length"],
            ["Acrocanthosaurus (top-spined lizard)", 12.2],
            ["Albertosaurus (Alberta lizard)", 9.1],
            ["Allosaurus (other lizard)", 12.2],
            ["Apatosaurus (deceptive lizard)", 22.9],
            ["Archaeopteryx (ancient wing)", 0.9],
            ["Argentinosaurus (Argentina lizard)", 36.6],
            ["Baryonyx (heavy claws)", 9.1],
            ["Brachiosaurus (arm lizard)", 30.5],
            ["Ceratosaurus (horned lizard)", 6.1],
            ["Coelophysis (hollow form)", 2.7],
            ["Compsognathus (elegant jaw)", 0.9],
            ["Deinonychus (terrible claw)", 2.7],
            ["Diplodocus (double beam)", 27.1],
            ["Dromicelomimus (emu mimic)", 3.4],
            ["Gallimimus (fowl mimic)", 5.5],
            ["Mamenchisaurus (Mamenchi lizard)", 21.0],
            ["Megalosaurus (big lizard)", 7.9],
            ["Microvenator (small hunter)", 1.2],
            ["Ornithomimus (bird mimic)", 4.6],
            ["Oviraptor (egg robber)", 1.5],
            ["Plateosaurus (flat lizard)", 7.9],
            ["Sauronithoides (narrow-clawed lizard)", 2.0],
            ["Seismosaurus (tremor lizard)", 45.7],
            ["Spinosaurus (spiny lizard)", 12.2],
            ["Supersaurus (super lizard)", 30.5],
            ["Tyrannosaurus (tyrant lizard)", 15.2],
            ["Ultrasaurus (ultra lizard)", 30.5],
            ["Velociraptor (swift robber)", 1.8],
          ]}
          options={{
            title: "Distribution",
            legend: { position: "none" },
            colors: ["#4285F4"],
            chartArea: { width: 401 },
            hAxis: {
              ticks: [-1, -0.75, -0.5, -0.25, 0, 0.25, 0.5, 0.75, 1],
            },
            bar: { gap: 0 },
            histogram: {
              bucketSize: 5,
              maxNumBuckets: 200,
              minValue: 0,
              maxValue: 30,
            },
          }}
          rootProps={{ "data-testid": "4" }}
        />
      </Card>
    );
  }
}