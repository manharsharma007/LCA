import React, { useEffect, useReducer, useState } from "react";
import CheckBoxInput from "../calculator/checkBoxInput";
import InputBox from "../calculator/inputBox";
import useStorage from "@/hooks/useStorage";
import Loader from "../calculator/loader";

const updateWashComputedParameters = (
  washTemp: any,
  washColdTemp: any,
  washLoad: any,
  washTime: any
) => {
  return -0.0159 + 0.001 * washTemp + 0.0006 * washTime + 0.0433 * washLoad;
};

function Step3() {
  const [loading, setLoading] = useState(true);
  const [state, updateState] = useReducer(
    (prev: any, next: any) => {
      const newState = { ...prev, ...next };
      return newState;
    },
    {
      washColdTemp: 0,
      washTemp: 0,
      washLoad: 0,
      washTime: 0,
      enableWashGrid: false,
      enableWashLowCarbon: false,
      enableWashNatural: false,
      washGrid: 0,
      washLowCarbon: 0,
      washNatural: 0,
    }
  );
  const { getItem, getSavedNumber, saveToLocalStorage } = useStorage();

  useEffect(() => {
    // load the saved values from the local storage
    let washTemp = getSavedNumber("washTemp", 17),
      washColdTemp = getSavedNumber("washColdTemp", 15),
      washLoad = getSavedNumber("washLoad", 1.8),
      washTime = getSavedNumber("washTime", 56);

    updateState({
      washColdTemp: washColdTemp,
      washTemp: washTemp,
      washLoad: washLoad,
      washTime: washTime,
    });
    // update the checkboxes
    updateState({
      enableWashGrid:
        getItem("enableWashGrid") == "true" ||
        (getItem("enableWashGrid") == null &&
          getItem("enableWashLowCarbon") == null &&
          getItem("enableWashNatural") == null),
    });
    updateState({
      enableWashLowCarbon: getItem("enableWashLowCarbon") == "true",
    });
    updateState({ enableWashNatural: getItem("enableWashNatural") == "true" });

    // update the textbox values
    updateState({
      washGrid:
        getSavedNumber("washGrid", 0) == 0
          ? updateWashComputedParameters(
              washTemp,
              washColdTemp,
              washLoad,
              washTime
            )
          : getSavedNumber("washGrid", 0),
      washLowCarbon:
        getSavedNumber("washLowCarbon", 0) == 0
          ? updateWashComputedParameters(
              washTemp,
              washColdTemp,
              washLoad,
              washTime
            )
          : getSavedNumber("washLowCarbon", 0),
      washNatural: getSavedNumber("washNatural", 0),
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
            Please input any values if known? The defaults are filled for
            convenience and can be changed.
          </h4>
          <div className="grid grid-cols-4 ms-9 mt-10 mx-auto">
            <InputBox
              placeholder={state.washTemp}
              value={state.washTemp}
              text="Set temperature (C)"
              onChange={(e: any) => {
                saveToLocalStorage("washTemp", e);
                updateState({ washTemp: e });
                saveToLocalStorage(
                  "waterConsumption",
                  updateWashComputedParameters(
                    e,
                    state.washColdTemp,
                    state.washLoad,
                    state.washTime
                  )
                );
              }}
            />
            <InputBox
              placeholder={state.washColdTemp}
              value={state.washColdTemp}
              text="Cold temperature (C)"
              onChange={(e: any) => {
                saveToLocalStorage("washColdTemp", e);
                updateState({ washColdTemp: e });
                saveToLocalStorage(
                  "waterConsumption",
                  updateWashComputedParameters(
                    state.washTemp,
                    e,
                    state.washLoad,
                    state.washTime
                  )
                );
              }}
            />
            <InputBox
              placeholder={state.washLoad}
              value={state.washLoad}
              text="Water Load (litres/kg)"
              onChange={(e: any) => {
                saveToLocalStorage("washLoad", e);
                updateState({ washLoad: e });
                saveToLocalStorage(
                  "waterConsumption",
                  updateWashComputedParameters(
                    state.washTemp,
                    state.washColdTemp,
                    e,
                    state.washTime
                  )
                );
              }}
            />
            <InputBox
              placeholder={state.washTime}
              value={state.washTime}
              text="Washing time (mins)"
              onChange={(e: any) => {
                saveToLocalStorage("washTime", e);
                updateState({ washTime: e });
                saveToLocalStorage(
                  "waterConsumption",
                  updateWashComputedParameters(
                    state.washTemp,
                    state.washColdTemp,
                    state.washLoad,
                    e
                  )
                );
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
            If reinforced: Please adjust the ratio of trilaminate to
            single-layer (100% polyester)
          </h4>
          <CheckBoxInput
            styles="mt-10 mx-auto w-[92%]"
            items={[
              {
                id: "1",
                text: "Electricity Grid (kWh)",
                default: state.washGrid,
                value: state.washGrid,
                checked: state.enableWashGrid,
                onCheckedChange: (e: any) => {
                  if (e) {
                    saveToLocalStorage("washGrid", state.washGrid);
                  }
                  saveToLocalStorage("enableWashGrid", e);
                  updateState({ enableWashGrid: e });
                },
                onChange: (e: any) => {
                  updateState({ washGrid: e });
                  saveToLocalStorage("washGrid", e);
                },
              },
              {
                id: "2",
                text: "Electricity low carbon (kWh)",
                default: state.washLowCarbon,
                value: state.washLowCarbon,
                checked: state.enableWashLowCarbon,
                onCheckedChange: (e: any) => {
                  if (e) {
                    saveToLocalStorage("washLowCarbon", state.washLowCarbon);
                  }
                  saveToLocalStorage("enableWashLowCarbon", e);
                  updateState({ enableWashLowCarbon: e });
                },
                onChange: (e: any) => {
                  updateState({ washLowCarbon: e });
                  saveToLocalStorage("washLowCarbon", e);
                },
              },
              {
                id: "3",
                text: "Natural Gas (MJ)",
                default: state.washNatural,
                value: state.washNatural,
                checked: state.enableWashNatural,
                onCheckedChange: (e: any) => {
                  if (e) {
                    saveToLocalStorage("washNatural", state.washNatural);
                  }
                  saveToLocalStorage("enableWashNatural", e);
                  updateState({ enableWashNatural: e });
                },
                onChange: (e: any) => {
                  updateState({ washNatural: e });
                  saveToLocalStorage("washNatural", e);
                },
              },
            ]}
            description="You can choose multiple option."
          />
        </>
      )}
    </div>
  );
}

export default Step3;
