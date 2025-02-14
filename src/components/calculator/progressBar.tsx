"use client";
import React from "react";

function Progressbar(props: any) {
  return (
    <div className="bg-blue-100 w-[100%] h-[25px] relative rounded-md shadow-[#ccc]">
      <div
        className={`bg-gradient-to-b from-[#186EC4] to-[#024C96] h-[100%] relative text-center text-sm rounded-md text-[rgba(255,255,255,0.8)] leading-[25px] ${
          props.width == 100 ? "" : "rounded-tr-none rounded-br-none"
        }`}
        style={{ width: props.width + "%" }}
      >
        Step {props.step} of {props.total} - {props.width}% Complete
      </div>
    </div>
  );
}

export default Progressbar;
