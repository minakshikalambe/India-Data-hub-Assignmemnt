
import React from "react";
import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const Adata = [
  {
   days:30,
   puppyBar:"0-1Puppy"
  },
  {
    days:85,
    puppyBar:"2-6Adult"
  },
  {
    days:103,
    puppyBar:"7+Senior"
  }
];

export default function Adopted() {
  return (
    <ComposedChart
      layout="vertical"
      width={350}
      height={160}
      data={Adata}
      margin={{
        top: 0,
        right: 20,
        bottom: 20,
        left: 20
      }}
    >
      <XAxis type="number" />
      <YAxis dataKey="puppyBar" type="category" scale="band" interval={"preserveStartEnd"}/>
      <Tooltip />
      <Bar dataKey="days" barSize={7} fill="rgb(78, 210, 220)" />
    </ComposedChart>
  );
}