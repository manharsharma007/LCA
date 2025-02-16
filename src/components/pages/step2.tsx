import React, { useEffect, useReducer, useState } from "react";
import CheckBoxInput from "../calculator/checkBoxInput";
import useStorage from "@/hooks/useStorage";
import Loader from "../calculator/loader";

function Step2() {
  const [loading, setLoading] = useState(true);
  const [state, updateState] = useReducer(
    (prev: any, next: any) => {
      const newState = { ...prev, ...next };
      return newState;
    },
    {
      supplierTransportTruck: 0,
      supplierTransportSea: 0,
      supplierTransportRail: 0,
      supplierTransportAir: 0,
      enableTruck: false,
      enableSea: false,
      enableRail: false,
      enableAir: false,
    }
  );

  const { getItem, saveToLocalStorage } = useStorage();

  useEffect(() => {
    updateState({
      supplierTransportTruck:
        getItem("supplierTransportTruck") !== null
          ? parseFloat(getItem("supplierTransportTruck")!)
          : 100,
    });
    updateState({
      supplierTransportSea:
        getItem("supplierTransportSea") !== null
          ? parseFloat(getItem("supplierTransportSea")!)
          : 0,
    });
    updateState({
      supplierTransportRail:
        getItem("supplierTransportRail") !== null
          ? parseFloat(getItem("supplierTransportRail")!)
          : 0,
    });
    updateState({
      supplierTransportAir:
        getItem("supplierTransportAir") !== null
          ? parseFloat(getItem("supplierTransportAir")!)
          : 0,
    });
    updateState({ enableTruck: getItem("enableTruck") == "true" });
    updateState({ enableSea: getItem("enableSea") == "true" });
    updateState({ enableRail: getItem("enableRail") == "true" });
    updateState({ enableAir: getItem("enableAir") == "true" });

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
            Do you know the your mode of transportation from supplier (in km)?
          </h4>
          <CheckBoxInput
            styles="mt-10 mx-auto w-[92%]"
            items={[
              {
                id: "1",
                text: "Truck (EURO6)",
                default: "0 km",
                value: state.supplierTransportTruck,
                checked: state.enableTruck,
                onCheckedChange: (e: any) => {
                  saveToLocalStorage("supplierTransportTruck", state.truck);
                  saveToLocalStorage("enableTruck", e);
                  updateState({ enableTruck: e });
                },
                onChange: (e: any) => {
                  updateState({ supplierTransportTruck: e });
                  saveToLocalStorage("supplierTransportTruck", e);
                },
              },
              {
                id: "2",
                text: "Sea",
                default: "0 km",
                value: state.supplierTransportSea,
                checked: state.enableSea,
                onCheckedChange: (e: any) => {
                  saveToLocalStorage("supplierTransportSea", state.sea);
                  saveToLocalStorage("enableSea", e);
                  updateState({ enableSea: e });
                },
                onChange: (e: any) => {
                  updateState({ supplierTransportSea: e });
                  saveToLocalStorage("supplierTransportSea", e);
                },
              },
              {
                id: "3",
                text: "Rail",
                default: "0 km",
                value: state.supplierTransportRail,
                checked: state.enableRail,
                onCheckedChange: (e: any) => {
                  saveToLocalStorage("supplierTransportRail", state.rail);
                  saveToLocalStorage("enableRail", e);
                  updateState({ enableRail: e });
                },
                onChange: (e: any) => {
                  updateState({ supplierTransportRail: e });
                  saveToLocalStorage("supplierTransportRail", e);
                },
              },
              {
                id: "4",
                text: "Air",
                default: "0 km",
                value: state.supplierTransportAir,
                checked: state.enableAir,
                onCheckedChange: (e: any) => {
                  saveToLocalStorage("supplierTransportAir", state.air);
                  saveToLocalStorage("enableAir", e);
                  updateState({ enableAir: e });
                },
                onChange: (e: any) => {
                  updateState({ supplierTransportAir: e });
                  saveToLocalStorage("supplierTransportAir", e);
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

export default Step2;
