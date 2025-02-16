import React, { useEffect, useReducer, useState } from "react";
import useStorage from "@/hooks/useStorage";
import CheckBoxInput from "../calculator/checkBoxInput";
import Loader from "../calculator/loader";

function Step8() {
  const [loading, setLoading] = useState(true);
  const [state, updateState] = useReducer(
    (prev: any, next: any) => {
      const newState = { ...prev, ...next };
      return newState;
    },
    {
      repurposing: 25,
      repurposingER: 25,
      repurposingNER: 24,
      landfill: 24,
      enableRepurposing: true,
      enableRepurposingER: true,
      enableRepurposingNER: true,
      enableLandfill: true,
    }
  );
  const { getItem, getSavedNumber, saveToLocalStorage } = useStorage();

  useEffect(() => {
    updateState({
      repurposing: getSavedNumber("repurposing", 25),
      repurposingER: getSavedNumber("repurposingER", 25),
      repurposingNER: getSavedNumber("repurposingNER", 25),
      landfill: getSavedNumber("landfill", 25),
      enableRepurposing:
        getItem("enableRepurposing") == "true" ||
        getItem("enableRepurposing") == null
          ? true
          : false,
      enableRepurposingER:
        getItem("enableRepurposingER") == "true" ||
        getItem("enableRepurposingER") == null
          ? true
          : false,
      enableRepurposingNER:
        getItem("enableRepurposingNER") == "true" ||
        getItem("enableRepurposingNER") == null
          ? true
          : false,
      enableLandfill:
        getItem("enableLandfill") == "true" || getItem("enableLandfill") == null
          ? true
          : false,
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
            Once the gowns or drapes have reached the end of their useful
            registered life as a medical device what happens to them?
          </h4>
          <CheckBoxInput
            styles="mt-10 mx-auto w-[92%]"
            items={[
              {
                id: "1",
                text: "Repurposing",
                default: state.repurposing,
                value: state.repurposing,
                checked: state.enableRepurposing,
                placeholder: "25 %",
                onCheckedChange: (e: any) => {
                  if (e) {
                    saveToLocalStorage("repurposing", state.repurposing);
                  }
                  saveToLocalStorage("enableRepurposing", e);
                  updateState({ enableRepurposing: e });
                },
                onChange: (e: any) => {
                  saveToLocalStorage("repurposing", e);
                  updateState({ repurposing: e });
                },
              },
              {
                id: "2",
                text: "Incineration with energy recovery",
                default: state.repurposingER,
                value: state.repurposingER,
                checked: state.enableRepurposingER,
                placeholder: "25 %",
                onCheckedChange: (e: any) => {
                  if (e) {
                    saveToLocalStorage("repurposingER", state.repurposingER);
                  }
                  saveToLocalStorage("enableRepurposingER", e);
                  updateState({ enableRepurposingER: e });
                },
                onChange: (e: any) => {
                  saveToLocalStorage("repurposingER", e);
                  updateState({ repurposingER: e });
                },
              },
              {
                id: "3",
                text: "Incineration without energy recovery",
                default: state.repurposingNER,
                value: state.repurposingNER,
                checked: state.enableRepurposingNER,
                placeholder: "25 %",
                onCheckedChange: (e: any) => {
                  if (e) {
                    saveToLocalStorage("repurposingNER", state.repurposingNER);
                  }
                  saveToLocalStorage("enableRepurposingNER", e);
                  updateState({ enableRepurposingNER: e });
                },
                onChange: (e: any) => {
                  saveToLocalStorage("repurposingNER", e);
                  updateState({ repurposingNER: e });
                },
              },
              {
                id: "4",
                text: "Landfill",
                default: state.landfill,
                value: state.landfill,
                checked: state.enableLandfill,
                placeholder: "25 %",
                onCheckedChange: (e: any) => {
                  if (e) {
                    saveToLocalStorage("landfill", state.landfill);
                  }
                  saveToLocalStorage("enableLandfill", e);
                  updateState({ enableLandfill: e });
                },
                onChange: (e: any) => {
                  saveToLocalStorage("landfill", e);
                  updateState({ landfill: e });
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

export default Step8;
