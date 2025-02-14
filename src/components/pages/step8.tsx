import React, { useState } from "react";
import CheckBox from "../calculator/checkBox";
import useStorage from "@/hooks/useStorage";
import CheckBoxInput from "../calculator/checkBoxInput";

function Step8() {
  const [repurposing, setRepurposing] = useState(0);
  const [incinerationER, setIncinerationER] = useState(0);
  const [incinerationNER, setIncinerationNER] = useState(0);
  const [landfill, setLandfill] = useState(0);
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
        Once the gowns or drapes have reached the end of their useful registered
        life as a medical device what happens to them?
      </h4>
      <CheckBoxInput
        styles="mt-10 mx-auto w-[95%]"
        items={[
          {
            id: "1",
            text: "Repurposing",
            onCheckedChange: (e: any) => {},
            onChange: (e: any) => {
              saveToLocalStorage("repurposing", e);
            },
          },
          {
            id: "2",
            text: "Incineration with energy recovery",
            onCheckedChange: (e: any) => {},
            onChange: (e: any) => {
              saveToLocalStorage("incinerationER", e);
            },
          },
          {
            id: "3",
            text: "Incineration without energy recovery",
            onCheckedChange: (e: any) => {},
            onChange: (e: any) => {
              saveToLocalStorage("incinerationNER", e);
            },
          },
          {
            id: "4",
            text: "Landfill",
            onCheckedChange: (e: any) => {},
            onChange: (e: any) => {
              saveToLocalStorage("landfill", e);
            },
          },
        ]}
        description="You can choose multiple option."
      />
    </div>
  );
}

export default Step8;
