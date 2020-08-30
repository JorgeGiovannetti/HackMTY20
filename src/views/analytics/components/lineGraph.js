import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  ResponsiveContainer,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const Example = ({ data }) => (
  <ResponsiveContainer height="70%">
    <LineChart
      width={100}
      height={400}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 20,
        bottom: 0,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="recommended"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="current" stroke="#82ca9d" />
    </LineChart>
  </ResponsiveContainer>
);

export default Example;
