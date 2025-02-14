import React, { useState } from "react";
import CheckBoxInput from "../calculator/checkBoxInput";
import InputBox from "../calculator/inputBox";
import useStorage from "@/hooks/useStorage";

function Step3() {
  const [temp, setTemp] = useState(0);
  const [washTemp, setWashTemp] = useState(0);
  const [washLoad, setWashLoad] = useState(0);
  const [washTime, setWashTime] = useState(0);
  const [eg, setEg] = useState(0);
  const [elc, setElc] = useState(0);
  const [ng, setNg] = useState(0);
  const [egCheckbox, setEgCheckbox] = useState(false);
  const [elcCheckbox, setElcCheckbox] = useState(false);
  const [ngCheckbox, setNgCheckbox] = useState(false);
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
        Please input any values if known? The defaults are filled for
        convenience and can be changed.
      </h4>
      <div className="grid grid-cols-4">
        <InputBox
          styles="mt-10 mx-auto w-[95%]"
          placeholder="71"
          text="Set temperature (C)"
          onChange={(e: any) => {
            saveToLocalStorage("temp", e);
            setTemp(e);
          }}
        />
        <InputBox
          styles="mt-10 mx-auto w-[95%]"
          placeholder="71"
          text="Cold temperature (C)"
          onChange={(e: any) => {
            saveToLocalStorage("washTemp", e);
            setWashTemp(e);
          }}
        />
        <InputBox
          styles="mt-10 mx-auto w-[95%]"
          placeholder="71"
          text="Water Load (litres/kg)"
          onChange={(e: any) => {
            saveToLocalStorage("wshLoad", e);
            setWashLoad(e);
          }}
        />
        <InputBox
          styles="mt-10 mx-auto w-[95%]"
          placeholder="90"
          text="Washing time (mins)"
          onChange={(e: any) => {
            saveToLocalStorage("washTime", e);
            setWashTime(e);
          }}
        />
      </div>
      <h4 className="flex items-start text-2xl font-semibold text-[#333] mt-16">
        <span
          className="material-symbols-outlined pe-4"
          style={{ fontSize: "30px", color: "#186EC4" }}
        >
          help
        </span>
        If reinforced: Please adjust the ratio of trilaminate to single-layer
        (100% polyester)
      </h4>
      <CheckBoxInput
        styles="mt-10 mx-auto w-[95%]"
        items={[
          {
            id: "1",
            text: "Electricity Grid (kWh)",
            default: 100,
            onCheckedChange: (e: any) => {
              if (e) {
                saveToLocalStorage("eg", eg);
              }
              saveToLocalStorage("setWashElectricity", "eg");
            },
            onChange: (e: any) => {
              setEg(e);
              saveToLocalStorage("eg", e);
            },
          },
          {
            id: "2",
            text: "Electricity low carbon (kWh)",
            default: 0,
            onCheckedChange: (e: any) => {
              if (e) {
                saveToLocalStorage("elc", elc);
              }
              saveToLocalStorage("setWashElectricity", "elc");
            },
            onChange: (e: any) => {
              setElc(e);
              saveToLocalStorage("elc", e);
            },
          },
          {
            id: "3",
            text: "Natural Gas (MJ)",
            default: 0,
            onCheckedChange: (e: any) => {
              if (e) {
                saveToLocalStorage("ng", ng);
              }
              saveToLocalStorage("setWashElectricity", "ng");
            },
            onChange: (e: any) => {
              setNg(e);
              saveToLocalStorage("ng", e);
            },
          },
        ]}
        description="You can choose multiple option."
      />
    </div>
  );
}

export default Step3;
