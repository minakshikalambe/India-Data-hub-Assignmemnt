
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";

const Tdata = [
    {
     year1:2017,
     adopt1:37
    },
    {
        year1:2018,
        adopt1:50
    },
    {
        year1:2019,
        adopt1:56
    },
    {
        year1:2020,
        adopt1:40
    },
    {
        year1:2021,
        adopt1:47
    },
    {
        year1:2022,
        adopt1:59
    }
  ];

export default function App() {
  return (
    <AreaChart
      width={400}
      height={200}
      data={Tdata}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0
      }}
    >
      <XAxis dataKey="year1" />
      <YAxis />
      <Tooltip />
      <Area  dataKey="adopt1" stroke="rgb(78, 210, 220)" fill="rgb(151,226,231)" />
    </AreaChart>
  );
}