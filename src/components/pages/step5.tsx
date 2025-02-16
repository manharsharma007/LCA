import React, { useEffect, useReducer, useState } from "react";
import CheckBoxInput from "../calculator/checkBoxInput";
import RadioButton from "../calculator/radioButton";
import InputBox from "../calculator/inputBox";
import useStorage from "@/hooks/useStorage";
import Loader from "../calculator/loader";

function Step5() {
  const [loading, setLoading] = useState(true);
  const [state, updateState] = useReducer(
    (prev: any, next: any) => {
      const newState = { ...prev, ...next };
      return newState;
    },
    {
      dryerType: "dryerGas",
      dryerGrid: 0,
      dryerLowCarbon: 0,
      dryerGas: 0,
      enableDryerGrid: false,
      enableDryerLowCarbon: false,
    }
  );
  const { getItem, getSavedNumber, saveToLocalStorage } = useStorage();

  useEffect(() => {
    updateState({
      dryerGrid: getSavedNumber("dryerGrid", 5),
      dryerLowCarbon: getSavedNumber("dryerLowCarbon", 5),
      dryerGas: getSavedNumber("dryerGas", 5),
      dryerType: getItem("dryerType"),
      enableDryerGrid: getItem("enableDryerGrid") == "true",
      enableDryerLowCarbon: getItem("enableDryerLowCarbon") == "true",
    });

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
            Please advise how the textiles are dried?
          </h4>
          <RadioButton
            styles="mt-10 mx-auto w-[92%]"
            items={[
              {
                id: "hp",
                text: "Heat pump dryer",
                value: "1",
                checked: state.dryerType === "dryerHP",
                onClick: () => {
                  updateState({
                    dryerType: "dryerHP",
                  });
                  saveToLocalStorage("dryerType", "dryerHP");
                },
              },
              {
                id: "ed",
                text: "Standard electric dryer",
                value: "0",
                checked: state.dryerType === "dryerElectric",
                onClick: () => {
                  updateState({
                    dryerType: "dryerElectric",
                  });
                  saveToLocalStorage("dryerType", "dryerElectric");
                },
              },
              {
                id: "gs",
                text: "Gas dryer",
                value: "2",
                checked: state.dryerType === "dryerGas",
                onClick: () => {
                  updateState({
                    dryerType: "dryerGas",
                  });
                  saveToLocalStorage("dryerType", "dryerGas");
                  updateState({ enableDryerGrid: false });
                  updateState({ enableDryerLowCarbon: false });
                },
              },
            ]}
          />
          {state.dryerType == "dryerHP" && (
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
                styles="mt-10 mx-auto w-[92%]"
                items={[
                  {
                    id: "1",
                    text: "Electric grid (kWh)",
                    default: state.dryerGrid,
                    value: state.dryerGrid,
                    checked: state.enableDryerGrid,
                    placeholder: "5 kWh",
                    onCheckedChange: (e: any) => {
                      if (e) {
                        saveToLocalStorage("dryerGrid", state.dryerGrid);
                      }
                      saveToLocalStorage("enableDryerGrid", e);
                      updateState({ enableDryerGrid: e });
                    },
                    onChange: (e: any) => {
                      saveToLocalStorage("dryerGrid", e);
                      updateState({ dryerGrid: e });
                    },
                  },
                  {
                    id: "2",
                    text: "Low carbon grid (kWh)",
                    default: state.dryerLowCarbon,
                    value: state.dryerLowCarbon,
                    checked: state.enableDryerLowCarbon,
                    placeholder: "5 kWh",
                    onCheckedChange: (e: any) => {
                      if (e) {
                        saveToLocalStorage(
                          "dryerLowCarbon",
                          state.dryerLowCarbon
                        );
                      }
                      saveToLocalStorage("enableDryerLowCarbon", e);
                      updateState({ enableDryerLowCarbon: e });
                    },
                    onChange: (e: any) => {
                      saveToLocalStorage("dryerLowCarbon", e);
                      updateState({ dryerLowCarbon: e });
                    },
                  },
                ]}
                description="You can choose multiple option."
              />
            </>
          )}
          {state.dryerType == "dryerElectric" && (
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
                styles="mt-10 mx-auto w-[92%]"
                items={[
                  {
                    id: "1",
                    text: "Electric grid (kWh)",
                    default: state.dryerGrid,
                    value: state.dryerGrid,
                    checked: state.enableDryerGrid,
                    placeholder: "5 kWh",
                    onCheckedChange: (e: any) => {
                      if (e) {
                        saveToLocalStorage("dryerGrid", state.dryerGrid);
                      }
                      saveToLocalStorage("enableDryerGrid", e);
                      updateState({ enableDryerGrid: e });
                    },
                    onChange: (e: any) => {
                      saveToLocalStorage("dryerGrid", e);
                      updateState({ dryerGrid: e });
                    },
                  },
                  {
                    id: "2",
                    text: "Low carbon grid (kWh)",
                    default: state.dryerLowCarbon,
                    value: state.dryerLowCarbon,
                    checked: state.enableDryerLowCarbon,
                    placeholder: "5 kWh",
                    onCheckedChange: (e: any) => {
                      if (e) {
                        saveToLocalStorage(
                          "dryerLowCarbon",
                          state.dryerLowCarbon
                        );
                      }
                      saveToLocalStorage("enableDryerLowCarbon", e);
                      updateState({ enableDryerLowCarbon: e });
                    },
                    onChange: (e: any) => {
                      saveToLocalStorage("dryerLowCarbon", e);
                      updateState({ dryerLowCarbon: e });
                    },
                  },
                ]}
                description="You can choose multiple option."
              />
            </>
          )}
          {state.dryerType == "dryerGas" && (
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
                styles="mt-10 mx-auto w-[92%]"
                placeholder="5 kWh"
                text="Gas consumption (kWh)"
                value={state.dryerGas}
                onChange={(e: any) => {
                  console.log(e);
                  saveToLocalStorage("dryerGas", e);
                  updateState({ dryerGas: e });
                }}
              />
            </>
          )}
        </>
      )}
    </div>
  );
}

export default Step5;
