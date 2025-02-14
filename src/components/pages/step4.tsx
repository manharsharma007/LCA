import React, { useState } from "react";
import CheckBoxInput from "../calculator/checkBoxInput";
import useStorage from "@/hooks/useStorage";

function Step4() {
  const [hydrogenPeroxide, setHydrogenPeroxide] = useState(0);
  const [citricAcid, setCitricAcid] = useState(0);
  const [sodiumHydroxide, setSodiumHydroxide] = useState(0);
  const [nonIonic, setNonIonic] = useState(0);
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
        Please input estimates for the chemicals used for the wash processes per
        kilogram of textiles if known.
      </h4>
      <CheckBoxInput
        styles="mt-10 mx-auto w-[95%]"
        items={[
          {
            id: "1",
            text: "Non-ionic (ml)",
            default: "10",
            onCheckedChange: (e: any) => {
              if (e) {
                saveToLocalStorage("nonIonic", nonIonic);
              }
            },
            onChange: (e: any) => {
              setNonIonic(e);
              saveToLocalStorage("nonIonic", e);
            },
          },
          {
            id: "2",
            text: "Sodium hydroxide (ml)",
            default: "0 km",
            onCheckedChange: (e: any) => {
              if (e) {
                saveToLocalStorage("sodiumHydroxide", sodiumHydroxide);
              }
            },
            onChange: (e: any) => {
              setSodiumHydroxide(e);
              saveToLocalStorage("sodiumHydroxide", e);
            },
          },
          {
            id: "3",
            text: "Citric acid (ml)",
            default: "0 km",
            onCheckedChange: (e: any) => {
              if (e) {
                saveToLocalStorage("citricAcid", citricAcid);
              }
            },
            onChange: (e: any) => {
              setCitricAcid(e);
              saveToLocalStorage("citricAcid", e);
            },
          },
          {
            id: "4",
            text: "Hydrogen peroxide (ml)",
            default: "0 km",
            onCheckedChange: (e: any) => {
              if (e) {
                saveToLocalStorage("hydrogenPeroxide", hydrogenPeroxide);
              }
            },
            onChange: (e: any) => {
              setHydrogenPeroxide(e);
              saveToLocalStorage("hydrogenPeroxide", e);
            },
          },
        ]}
        description="You can choose multiple option."
      />
    </div>
  );
}

export default Step4;
