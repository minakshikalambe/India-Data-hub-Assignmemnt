
import React from "react";
import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const Bdata = [
  {
    breeds:"Labrador",
    total:1422
  },
  {
    breeds:"Pit",
    total:838
  },
  {
    breeds:"Hound",
    total: 400
  },
  {
    breeds:"Shepherd",
    total:376
  },
  {
    breeds:"Terrier",
    total:306
  },
  {
    breeds:"American",
    total:1422
  },
//   {
//     breeds:"Catahouia",
//     total:155
//   },
//   {
//     breeds:"Hounds",
//     total:150
//   },
//   {
//     breeds:"Austrilian",
//     total:126
//   },
//   {
//     breeds:"Mountain",
//     total:108
//   }
];

export default function Breeds() {
  return (
    <ComposedChart
      layout="vertical"
      width={350}
      height={150}
      data={Bdata}
      margin={{
        top: 0,
        right: 20,
        bottom: 20,
        left: 20
      }}
    >
      <XAxis type="total" />
      <YAxis dataKey="breeds" type="category" scale="band" interval={"preserveStartEnd"}/>
      <Tooltip />
      <Bar dataKey="total" barSize={7} fill="rgb(78, 210, 220)" />
    </ComposedChart>
  );
}


// import React from "react";
// import { MDBContainer } from "mdbreact";
// import { HorizontalBar } from "react-chartjs-2";
  
// const Breeds = () => {

//   const data = {
//     labels: ["Sunday", "Monday", "Tuesday",
//       "Wednesday", "Thursday", "Friday", "Saturday"],
//     datasets: [
//       {
//         label: "Hours Studied in Geeksforgeeks",
//         data: [2, 5, 7, 9, 7, 6, 4],
//         fill: true,
//         backgroundColor: "rgba(6, 156,51, .3)",
//         borderColor: "#02b844",
//       }
//     ]
//   }
  
//   return (
//     <MDBContainer>
//       <HorizontalBar data={data} />
//     </MDBContainer>
//   );
// }
  
// export default Breeds;