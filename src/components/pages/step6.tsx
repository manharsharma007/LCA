import React, { useState } from "react";
import CheckBoxInput from "../calculator/checkBoxInput";
import useStorage from "@/hooks/useStorage";

function Step6() {
  const [electricTruck, setElectricTruck] = useState(0);
  const [dieselTruck, setDieselTruck] = useState(0);
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
        Please advise the distance and means of transport between the processing
        unit and the healthcare facility
      </h4>
      <CheckBoxInput
        styles="mt-10 mx-auto w-[95%]"
        items={[
          {
            id: "1",
            text: "Electric Truck",
            default: "0 km",
            onCheckedChange: (e: any) => {
              if (e) {
                saveToLocalStorage("electricTruck", electricTruck);
                saveToLocalStorage("truckType", "electric");
              }
            },
            onChange: (e: any) => {
              setElectricTruck(e);
              saveToLocalStorage("electricTruck", e);
            },
          },
          {
            id: "2",
            text: "Diesel Truck",
            default: "0 km",
            onCheckedChange: (e: any) => {
              if (e) {
                saveToLocalStorage("dieselTruck", dieselTruck);
                saveToLocalStorage("truckType", "diesel");
              }
            },
            onChange: (e: any) => {
              setDieselTruck(e);
              saveToLocalStorage("dieselTruck", e);
            },
          },
        ]}
        description="You can choose multiple option."
      />
    </div>
  );
}

export default Step6;
