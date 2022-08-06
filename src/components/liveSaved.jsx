import React from "react";
import { AreaChart,ResponsiveContainer,XAxis,YAxis,Tooltip,Area,ReferenceLine } from "recharts";
const Sdata = [
    {
     year:2014,
     saves:2
    },
    {
        year:2015,
        saves:3
    },
    {
        year:2016,
        saves:5
    },
    {
        year:2017,
        saves:6
    },
    {
        year:2018,
        saves:7
    },
    {
        year:2019,
        saves:8
    },
    {
        year:2020,
        saves:9
    },
    {
        year:2021,
        saves:11
    },
    {
        year:2022,
        saves:12
    }
  ];
export const LiveSaves=()=>{
    return (
       <>
       {/* <ResponsiveContainer width="100%" aspect={0}>
          <AreaChart data={Sdata} >
            <XAxis dataKey="year" interval={"preserveStartEnd"}  />
            <YAxis tickFormatter={(value)=>value+"k"}/>
            <Tooltip contentStyle={{backgroundColor:"white"}}/>
            <Line dataKey="saves" activeDot={{r:4}} />
            <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
          </AreaChart>
       </ResponsiveContainer> */}

<ResponsiveContainer width="100%" height="80%">
    <AreaChart data={Sdata}
      margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
      <XAxis dataKey="year" interval={"preserveStartEnd"} />
      <YAxis tickFormatter={(value)=>value+"k"}/>
      <Tooltip />
      <ReferenceLine x="Page C" stroke="green" label="Min PAGE" />
      <ReferenceLine label="Max" stroke="red" strokeDasharray="3 3" />
      <Area dataKey="saves" strokeWidth={3} stroke="rgb(78, 210, 220)" fill="rgb(151,226,231)" />
    </AreaChart>
  </ResponsiveContainer>
       </>
    )
}