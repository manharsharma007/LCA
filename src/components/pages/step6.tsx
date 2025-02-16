import React, { useEffect, useReducer, useState } from "react";
import CheckBoxInput from "../calculator/checkBoxInput";
import useStorage from "@/hooks/useStorage";
import Loader from "../calculator/loader";

function Step6() {
  const [loading, setLoading] = useState(true);
  const [state, updateState] = useReducer(
    (prev: any, next: any) => {
      const newState = { ...prev, ...next };
      return newState;
    },
    {
      electricTruck: 0,
      dieselTruck: 100,
      enableElectricTruck: false,
      enableDieselTruck: true,
    }
  );
  const { getItem, getSavedNumber, saveToLocalStorage } = useStorage();

  useEffect(() => {
    updateState({
      electricTruck: getSavedNumber("electricTruck", 0),
      dieselTruck: getSavedNumber("dieselTruck", 100),
      enableElectricTruck: getItem("enableElectricTruck") == "true",
      enableDieselTruck:
        getItem("enableDieselTruck") == "true" ||
        (getItem("enableDieselTruck") != "true" &&
          getItem("enableElectricTruck") !== null)
          ? getItem("enableDieselTruck") == "true"
          : true,
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
            Please advise the distance and means of transport between the
            processing unit and the healthcare facility (in km):
          </h4>
          <CheckBoxInput
            styles="mt-10 mx-auto w-[92%]"
            items={[
              {
                id: "1",
                text: "Electric Truck",
                default: state.electricTruck,
                value: state.electricTruck,
                checked: state.enableElectricTruck,
                placeholder: "0 km",
                onCheckedChange: (e: any) => {
                  if (e) {
                    saveToLocalStorage("electricTruck", state.electricTruck);
                  }
                  saveToLocalStorage("enableElectricTruck", e);
                  updateState({ enableElectricTruck: e });
                },
                onChange: (e: any) => {
                  saveToLocalStorage("electricTruck", e);
                  updateState({ electricTruck: e });
                },
              },
              {
                id: "2",
                text: "Diesel Truck",
                default: state.dieselTruck,
                value: state.dieselTruck,
                checked: state.enableDieselTruck,
                placeholder: "0 km",
                onCheckedChange: (e: any) => {
                  if (e) {
                    saveToLocalStorage("dieselTruck", state.dieselTruck);
                  }
                  saveToLocalStorage("enableDieselTruck", e);
                  updateState({ enableDieselTruck: e });
                },
                onChange: (e: any) => {
                  saveToLocalStorage("dieselTruck", e);
                  updateState({ dieselTruck: e });
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

export default Step6;
