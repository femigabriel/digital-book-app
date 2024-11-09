import React, { useState } from "react";

interface Props {
  text: string;
  colors: any;
}
export const SpotLightGame = ({ list, setResult }: any) => {
  const [active, setActive] = useState("");

  const handleClick = (e: any) => {
    setActive(e);
    setResult(list.correctAns == e, list.id)
  };

  return (
    <div>
      <div className="flex w-full justify-between  bg-[#F8F8F8] ">
        <div className=" px-5 py-3 w-full">
          <div>
            <span className="text-sm ">{list.text}</span>
          </div>
        </div>

        <div className=" flex gap-3 justify-center items-center px-5  ">
          <button
            onClick={() => handleClick("green")}
            style={{
              opacity: active == "green" || active == "" ? 1 : 0.3,
            }}
            className="w-[30px] rounded-full  h-[30px] bg-[#039A00]"
          ></button>

          <button
            onClick={() => handleClick("red")}
            style={{
              opacity: active == "red" || active == "" ? 1 : 0.3,
            }}
            className="w-[30px] rounded-full h-[30px] bg-[#FF0000]"
          ></button>

          <button
            onClick={() => handleClick("yellow")}
            style={{
              opacity: active == "yellow" || active == "" ? 1 : 0.3,
            }}
            className="w-[30px] rounded-full  h-[30px] bg-[#FDB804]"
          ></button>
        </div>
      </div>
    </div>
  );
};
