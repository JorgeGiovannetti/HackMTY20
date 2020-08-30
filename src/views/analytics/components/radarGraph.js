import React, { PureComponent } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
  PolarRadiusAxis,
} from "recharts";

const data = [
  {
    subject: "Mask",
    A: 200,
    B: 110,
    fullMark: 150,
  },
  {
    subject: "Distance 6",
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "Distance 5",
    A: 68,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "Distance 4",
    A: 48,
    B: 130,
    fullMark: 150,
  },
];

export default class Example extends PureComponent {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/6ebcxbx4/";

  render() {
    return (
      <ResponsiveContainer>
        <RadarChart
          cx={270}
          cy={120}
          outerRadius={90}
          width={500}
          height={300}
          data={data}
        >
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis />
          <Radar
            name="Mike"
            dataKey="A"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    );
  }
}
