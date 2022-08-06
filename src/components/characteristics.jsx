import React from "react";
import HSBar from "react-horizontal-stacked-bar-chart";

export const Charactericts =()=> {
  
 
    return (
      <>
        <div className="stcked_div">
            <div>
            <p>Gets alog with Dogs</p>
            </div>
            <div>
        <HSBar
          showTextIn
          height={15}
          data={[
            { value: 81, description: "87%" ,color:"rgb(78, 210, 220)" },
            { value: 1, description: "1%",color:"rgb(81, 79, 79)" },
            { value: 12, description: "12%",color:"rgb(211,211,211)" }
          ]}
        />
        </div>
        </div>
        <div className="stcked_div">
            <div>
            <p>Gets alog with Cats</p>
            </div>
            <div>
        <HSBar
          showTextIn
          height={15}
          data={[
            { value: 29, description: "29%" ,color:"rgb(78, 210, 220)" },
            { value: 6, description: "6%",color:"rgb(81, 79, 79)" },
            { value: 64, description: "64%",color:"rgb(211,211,211)" }
          ]}
        />
        </div>
        </div>
        <div className="stcked_div">
            <div>
            <p>Gets alog with Kids</p>
            </div>
            <div>
        <HSBar
          showTextIn
          height={15}
          data={[
            { value: 58, description: "58%" ,color:"rgb(78, 210, 220)" },
            { value: 4, description: "4%",color:"rgb(81, 79, 79)" },
            { value: 39, description: "39%",color:"rgb(211,211,211)" }
          ]}
        />
        </div>
        </div>
        <div className="stcked_div">
            <div>
            <p>Are Housebroker</p>
            </div>
            <div>
        <HSBar
          showTextIn
          height={15}
          data={[
            { value: 38, description: "38%" ,color:"rgb(78, 210, 220)" },
            { value: 6, description: "6%",color:"rgb(81, 79, 79)" },
            { value: 56, description: "56%",color:"rgb(211,211,211)" }
          ]}
        />
        </div>
        </div>
      </>
    );
  }


