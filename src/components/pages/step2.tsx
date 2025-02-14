import React, { useEffect, useState } from "react";
import CheckBoxInput from "../calculator/checkBoxInput";
import useStorage from "@/hooks/useStorage";
import { set } from "react-hook-form";

function Step2() {
  const [truck, setTruck] = useState(0);
  const [sea, setSea] = useState(0);
  const [rail, setRail] = useState(0);
  const [air, setAir] = useState(0);

  const [truckCheckbox, setTruckCheckbox] = useState(false);
  const [seaCheckbox, setSeaCheckbox] = useState(false);
  const [railCheckbox, setRailCheckbox] = useState(false);
  const [airCheckbox, setAirCheckbox] = useState(false);
  const { getItem, saveToLocalStorage } = useStorage();

  useEffect(() => {
    setTruck(
      getItem("truckEuro") !== null ? parseFloat(getItem("truckEuro")!) : 100
    );
    setSea(getItem("sea") !== null ? parseFloat(getItem("sea")!) : 0);
    setRail(getItem("rail") !== null ? parseFloat(getItem("rail")!) : 0);
    setAir(getItem("air") !== null ? parseFloat(getItem("air")!) : 0);
    let supplierTransportation = getItem("supplierTransportation");
    setTruckCheckbox(supplierTransportation == "truck");
    setSeaCheckbox(supplierTransportation == "sea");
    setRailCheckbox(supplierTransportation == "rail");
    setAirCheckbox(supplierTransportation == "air");
  }, []);

  return (
    <div>
      <h4 className="flex items-start text-2xl font-semibold text-[#333]">
        <span
          className="material-symbols-outlined pe-4"
          style={{ fontSize: "30px", color: "#186EC4" }}
        >
          help
        </span>
        Do you know the your mode of transportation from supplier?
      </h4>
      <CheckBoxInput
        styles="mt-10 mx-auto w-[95%]"
        items={[
          {
            id: "1",
            text: "Truck (EURO6)",
            default: "0 km",
            value: truck,
            checked: truckCheckbox,
            onCheckedChange: (e: any) => {
              saveToLocalStorage("truckEuro", truck);
              saveToLocalStorage("supplierTransportation", "truck");
              setTruckCheckbox(e);
            },
            onChange: (e: any) => {
              setTruck(e);
              saveToLocalStorage("truckEuro", e);
            },
          },
          {
            id: "2",
            text: "Sea",
            default: "0 km",
            value: sea,
            checked: seaCheckbox,
            onCheckedChange: (e: any) => {
              saveToLocalStorage("sea", sea);
              saveToLocalStorage("supplierTransportation", "sea");
              setSeaCheckbox(e);
            },
            onChange: (e: any) => {
              saveToLocalStorage("sea", e);
              setSea(e);
            },
          },
          {
            id: "3",
            text: "Rail",
            default: "0 km",
            value: rail,
            checked: railCheckbox,
            onCheckedChange: (e: any) => {
              saveToLocalStorage("rail", rail);
              saveToLocalStorage("supplierTransportation", "rail");
              setRailCheckbox(e);
            },
            onChange: (e: any) => {
              saveToLocalStorage("rail", e);
              setRail(e);
            },
          },
          {
            id: "4",
            text: "Air",
            default: "0 km",
            value: air,
            checked: airCheckbox,
            onCheckedChange: (e: any) => {
              saveToLocalStorage("air", air);
              saveToLocalStorage("supplierTransportation", "air");
              setAirCheckbox(e);
            },
            onChange: (e: any) => {
              saveToLocalStorage("air", e);
              setAir(e);
            },
          },
        ]}
        description="You can choose multiple option."
      />
    </div>
  );
}

export default Step2;
