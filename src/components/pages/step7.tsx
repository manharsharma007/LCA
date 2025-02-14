import React, { useState } from "react";
import InputBox from "../calculator/inputBox";
import useStorage from "@/hooks/useStorage";

function Step7() {
  const [uses, setUses] = useState(false);
  const { getItem, saveToLocalStorage } = useStorage();

  return (
    <div>
      <h4 className="flex items-start text-2xl font-semibold text-[#333]">
        <span
          className="material-symbols-outlined pe-4"
          style={{ fontSize: "30px", color: "#186EC4" }}
        >
          help
        </span>
        Please estimate the average number of uses textiles have before
        withdrawn from service from either loss or damage.
      </h4>
      <InputBox
        styles="mt-10 mx-auto w-[95%]"
        placeholder="20"
        text="Number of uses"
        onChange={(e: any) => {
          setUses(e);
          saveToLocalStorage("uses", e);
        }}
      />
    </div>
  );
}

export default Step7;
