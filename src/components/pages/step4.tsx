import React, { useEffect, useReducer, useState } from "react";
import CheckBoxInput from "../calculator/checkBoxInput";
import useStorage from "@/hooks/useStorage";
import Loader from "../calculator/loader";

function Step4() {
  const [loading, setLoading] = useState(true);
  const [state, updateState] = useReducer(
    (prev: any, next: any) => {
      const newState = { ...prev, ...next };
      return newState;
    },
    {
      sodiumHydroxide: 0,
      hydrogenPeroxide: 0,
      nonIonic: 0,
      citricAcid: 0,
      heraPro: 0,
      dualUltra: 0,
      enableSodiumHydroxide: 0,
      enableHydrogenPeroxide: 0,
      enableNonIonic: 0,
      enableCitricAcid: 0,
      enableHeraPro: 0,
      enableDualUltra: 0,
    }
  );
  const { getItem, getSavedNumber, saveToLocalStorage } = useStorage();

  useEffect(() => {
    updateState({
      sodiumHydroxide: getSavedNumber("sodiumHydroxide", 5),
      hydrogenPeroxide: getSavedNumber("hydrogenPeroxide", 5),
      nonIonic: getSavedNumber("nonIonic", 5),
      citricAcid: getSavedNumber("citricAcid", 5),
      heraPro: getSavedNumber("heraPro", 5),
      dualUltra: getSavedNumber("dualUltra", 5),
      enableSodiumHydroxide: getItem("enableSodiumHydroxide") == "true",
      enableHydrogenPeroxide: getItem("enableHydrogenPeroxide") == "true",
      enableNonIonic: getItem("enableNonIonic") == "true",
      enableCitricAcid: getItem("enableCitricAcid") == "true",
      enableHeraPro: getItem("enableHeraPro") == "true",
      enableDualUltra: getItem("enableDualUltra") == "true",
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
            Please input estimates for the chemicals used for the wash processes
            per kilogram of textiles if known.
          </h4>
          <CheckBoxInput
            styles="mt-10 mx-auto w-[92%]"
            items={[
              {
                id: "1",
                text: "Non-ionic (ml)",
                default: state.nonIonic,
                value: state.nonIonic,
                checked: state.enableNonIonic,
                onCheckedChange: (e: any) => {
                  if (e) {
                    saveToLocalStorage("nonIonic", state.nonIonic);
                  }
                  saveToLocalStorage("enableNonIonic", e);
                  updateState({ enableNonIonic: e });
                },
                onChange: (e: any) => {
                  updateState({ nonIonic: e });
                  saveToLocalStorage("nonIonic", e);
                },
              },
              {
                id: "2",
                text: "Sodium hydroxide (ml)",
                default: state.sodiumHydroxide,
                value: state.sodiumHydroxide,
                checked: state.enableSodiumHydroxide,
                onCheckedChange: (e: any) => {
                  if (e) {
                    saveToLocalStorage(
                      "sodiumHydroxide",
                      state.sodiumHydroxide
                    );
                  }
                  saveToLocalStorage("enableSodiumHydroxide", e);
                  updateState({ enableSodiumHydroxide: e });
                },
                onChange: (e: any) => {
                  updateState({ sodiumHydroxide: e });
                  saveToLocalStorage("sodiumHydroxide", e);
                },
              },
              {
                id: "3",
                text: "Citric acid (ml)",
                default: state.citricAcid,
                value: state.citricAcid,
                checked: state.enableCitricAcid,
                onCheckedChange: (e: any) => {
                  if (e) {
                    saveToLocalStorage("citricAcid", state.citricAcid);
                  }
                  saveToLocalStorage("enableCitricAcid", e);
                  updateState({ enableCitricAcid: e });
                },
                onChange: (e: any) => {
                  updateState({ citricAcid: e });
                  saveToLocalStorage("citricAcid", e);
                },
              },
              {
                id: "4",
                text: "Hydrogen peroxide (ml)",
                default: state.hydrogenPeroxide,
                value: state.hydrogenPeroxide,
                checked: state.enableHydrogenPeroxide,
                onCheckedChange: (e: any) => {
                  if (e) {
                    saveToLocalStorage(
                      "hydrogenPeroxide",
                      state.hydrogenPeroxide
                    );
                  }
                  saveToLocalStorage("enableHydrogenPeroxide", e);
                  updateState({ enableHydrogenPeroxide: e });
                },
                onChange: (e: any) => {
                  updateState({ hydrogenPeroxide: e });
                  saveToLocalStorage("hydrogenPeroxide", e);
                },
              },

              {
                id: "5",
                text: "Hera Pro - Ideal (ml)",
                default: state.heraPro,
                value: state.heraPro,
                checked: state.enableHeraPro,
                onCheckedChange: (e: any) => {
                  if (e) {
                    saveToLocalStorage("heraPro", state.heraPro);
                  }
                  saveToLocalStorage("enableHeraPro", e);
                  updateState({ enableHeraPro: e });
                },
                onChange: (e: any) => {
                  updateState({ heraPro: e });
                  saveToLocalStorage("heraPro", e);
                },
              },
              {
                id: "6",
                text: "Dual Ultra - Christeyns (ml)",
                default: state.dualUltra,
                value: state.dualUltra,
                checked: state.enableDualUltra,
                onCheckedChange: (e: any) => {
                  if (e) {
                    saveToLocalStorage("dualUltra", state.dualUltra);
                  }
                  saveToLocalStorage("enableDualUltra", e);
                  updateState({ enableDualUltra: e });
                },
                onChange: (e: any) => {
                  updateState({ dualUltra: e });
                  saveToLocalStorage("dualUltra", e);
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

export default Step4;
