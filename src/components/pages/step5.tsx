import React, { useState } from "react";
import CheckBoxInput from "../calculator/checkBoxInput";
import RadioButton from "../calculator/radioButton";
import InputBox from "../calculator/inputBox";
import useStorage from "@/hooks/useStorage";

function Step5() {
  const [dryer, setDryer] = useState("gs");
  const [hpLcg, setHpLcg] = useState(0);
  const [hpEg, setHpEg] = useState(0);
  const [edLcg, setEdLcg] = useState(0);
  const [edEg, setEdEg] = useState(0);
  const [gs, setGs] = useState(0);
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
        Please advise how the textiles are dried?
      </h4>
      <RadioButton
        styles="mt-10 mx-auto w-[95%]"
        items={[
          {
            id: "hp",
            text: "Heat pump dryer",
            value: "1",
            checked: dryer === "hp",
            onClick: () => {
              setDryer("hp");
              saveToLocalStorage("dryperType", "hp");
            },
          },
          {
            id: "ed",
            text: "Standard electric dryer",
            value: "0",
            checked: dryer === "ed",
            onClick: () => {
              setDryer("ed");
              saveToLocalStorage("dryperType", "ed");
            },
          },
          {
            id: "gs",
            text: "Gas dryer",
            value: "2",
            checked: dryer === "gs",
            onClick: () => {
              setDryer("gs");
              saveToLocalStorage("dryperType", "gs");
            },
          },
        ]}
      />
      {dryer == "hp" && (
        <>
          <h4 className="flex items-start text-2xl font-semibold text-[#333] mt-16">
            <span
              className="material-symbols-outlined pe-4"
              style={{ fontSize: "30px", color: "#186EC4" }}
            >
              help
            </span>
            Please adjust the usage of the Electric dryer
          </h4>
          <CheckBoxInput
            styles="mt-10 mx-auto w-[95%]"
            items={[
              {
                id: "1",
                text: "Electric grid",
                default: "0",
                onCheckedChange: (e: any) => {
                  if (e) {
                    saveToLocalStorage("hpEg", hpEg);
                    saveToLocalStorage("dryerElectricityType", "hpEg");
                  }
                },
                onChange: (e: any) => {
                  setHpEg(e);
                  saveToLocalStorage("hpEg", e);
                },
              },
              {
                id: "2",
                text: "Low carbon grid",
                default: "0",
                onCheckedChange: (e: any) => {
                  if (e) {
                    saveToLocalStorage("hpLcg", hpLcg);
                    saveToLocalStorage("dryerElectricityType", "hpLcg");
                  }
                },
                onChange: (e: any) => {
                  setHpLcg(e);
                  saveToLocalStorage("hpLcg", e);
                },
              },
            ]}
            description="You can choose multiple option."
          />
        </>
      )}
      {dryer == "ed" && (
        <>
          <h4 className="flex items-start text-2xl font-semibold text-[#333] mt-16">
            <span
              className="material-symbols-outlined pe-4"
              style={{ fontSize: "30px", color: "#186EC4" }}
            >
              help
            </span>
            Please adjust the usage of the Gas dryer
          </h4>
          <CheckBoxInput
            styles="mt-10 mx-auto w-[95%]"
            items={[
              {
                id: "1",
                text: "Electric grid",
                default: "0",
                onCheckedChange: (e: any) => {
                  if (e) {
                    saveToLocalStorage("edEg", edEg);
                    saveToLocalStorage("dryerElectricityType", "edEg");
                  }
                },
                onChange: (e: any) => {
                  setEdEg(e);
                  saveToLocalStorage("edEg", e);
                },
              },
              {
                id: "2",
                text: "Low carbon grid",
                default: "0",
                onCheckedChange: (e: any) => {
                  if (e) {
                    saveToLocalStorage("edLcg", edLcg);
                    saveToLocalStorage("dryerElectricityType", "edLcg");
                  }
                },
                onChange: (e: any) => {
                  setEdLcg(e);
                  saveToLocalStorage("edLcg", e);
                },
              },
            ]}
            description="You can choose multiple option."
          />
        </>
      )}
      {dryer == "gs" && (
        <>
          <h4 className="flex items-start text-2xl font-semibold text-[#333] mt-16">
            <span
              className="material-symbols-outlined pe-4"
              style={{ fontSize: "30px", color: "#186EC4" }}
            >
              help
            </span>
            Please adjust the usage of the Gas dryer
          </h4>

          <InputBox
            styles="mt-10 mx-auto w-[95%]"
            placeholder="90"
            text="Gas consumption"
            onChange={(e: any) => {
              setGs(e);
              saveToLocalStorage("gs", e);
            }}
          />
        </>
      )}
    </div>
  );
}

export default Step5;
