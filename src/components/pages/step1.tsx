import React, { useEffect, useState } from "react";
import RadioButton from "../calculator/radioButton";
import SliderBar from "../calculator/sliderBar";
import useStorage from "@/hooks/useStorage";
import Loader from "../calculator/loader";

function Step1() {
  const [answer, setAnswer] = useState(true);
  const [ratioPet, setRatioPet] = useState(100);
  const [ratioTri, setRatioTri] = useState(0);
  const [loading, setLoading] = useState(true);
  const { getItem, saveToLocalStorage } = useStorage();

  useEffect(() => {
    setRatioPet(getItem("pet") !== null ? parseFloat(getItem("pet")!) : 100);
    setRatioTri(
      getItem("trilaminate") !== null ? parseFloat(getItem("trilaminate")!) : 0
    );
    setLoading(false);
  }, []);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <h4 className="flex items-start text-2xl font-semibold text-[#333]">
            <span
              className="material-symbols-outlined pe-4"
              style={{ fontSize: "30px", color: "#186EC4" }}
            >
              help
            </span>
            Do you know if these are single layer (default) or reinforced
            (trilaminate)?
          </h4>
          <RadioButton
            styles="mt-10 mx-auto w-[92%]"
            items={[
              {
                id: "yes1",
                text: "Yes",
                value: "1",
                checked: answer,
                onClick: () => setAnswer(true),
              },
              {
                id: "no2",
                text: "No",
                value: "0",
                checked: !answer,
                onClick: () => setAnswer(false),
              },
            ]}
          />
          {answer && (
            <>
              <h4 className="flex items-start text-2xl font-semibold text-[#333] mt-16">
                <span
                  className="material-symbols-outlined pe-4"
                  style={{ fontSize: "30px", color: "#186EC4" }}
                >
                  help
                </span>
                If reinforced: Please adjust the ratio of trilaminate to
                single-layer (100% polyester)
              </h4>
              <SliderBar
                styles="mt-10 mx-auto  w-[92%]"
                items={[
                  {
                    id: "1",
                    text: "Polyethylene terephthalate",
                    value: ratioPet,
                    step: 1,
                    default: ratioPet,
                    max: 100,
                    onValueChange: (e: number) => {
                      setRatioPet(e);
                      setRatioTri(100 - e);
                      saveToLocalStorage("pet", e);
                      saveToLocalStorage("trilaminate", 100 - e);
                    },
                    onChange: (e: number) => {
                      setRatioPet(e);
                      setRatioTri(100 - e);
                      saveToLocalStorage("pet", e);
                      saveToLocalStorage("trilaminate", 100 - e);
                    },
                  },
                  {
                    id: "2",
                    text: "Trilaminate",
                    value: ratioTri,
                    step: 1,
                    default: ratioTri,
                    max: 100,
                    onValueChange: (e: number) => {
                      setRatioPet(100 - e);
                      setRatioTri(e);
                      saveToLocalStorage("pet", 100 - e);
                      saveToLocalStorage("trilaminate", e);
                    },
                    onChange: (e: number) => {
                      setRatioPet(100 - e);
                      setRatioTri(e);
                      saveToLocalStorage("pet", 100 - e);
                      saveToLocalStorage("trilaminate", e);
                    },
                  },
                ]}
                description="Please input the percentage of the material used."
              />
            </>
          )}
        </>
      )}
    </div>
  );
}

export default Step1;
