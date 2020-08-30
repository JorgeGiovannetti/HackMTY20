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

const data = [
  {
    name: "January",
    expected: 50,
    real: 100,
    amt: 2400,
  },
  {
    name: "Febuary",
    expected: 40,
    real: 95,
    amt: 2210,
  },
  {
    name: "March",
    expected: 50,
    real: 120,
    amt: 2290,
  },
  {
    name: "April",
    expected: 30,
    real: 130,
    amt: 2000,
  },
  {
    name: "May",
    expected: 30,
    real: 100,
    amt: 2181,
  },
  {
    name: "June",
    expected: 20,
    real: 90,
    amt: 2500,
  },
  {
    name: "July",
    expected: 20,
    real: 30,
    amt: 2100,
  },
  {
    name: "August",
    expected: 18,
    real: 30,
    amt: 2100,
  },
  {
    name: "September",
    expected: 16,
    real: 70,
    amt: 2100,
  },
  {
    name: "October",
    expected: 10,
    real: 0,
    amt: 2100,
  },
  {
    name: "November",
    expected: 10,
    real: 0,
    amt: 2100,
  },
  {
    name: "December",
    expected: 10,
    real: 0,
    amt: 2100,
  },
];

export default class Example extends PureComponent {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/xqjtetw0/";

  render() {
    return (
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
            dataKey="expected"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="real" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
