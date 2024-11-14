"use client";
import React, { useState } from "react";
import {
  IoIosArrowForward,
  IoIosArrowBack,
  IoIosAddCircleOutline,
} from "react-icons/io";
import Calculator from "./calculator";

const steps = [
  {
    id: 1,
    title: "Raw Materials",
    description:
      "Please use the fields to provide the estimates of the raw materials used in your organisation",
    fields: [
      {
        name: "PET",
        type: "number",
        unit: "kg",
        placeholder: "0.5",
        description: "Please input the amount of PET used in the raw materials",
        label: "Polyethylene terephthalate (PET)",
      },
      {
        name: "Trilaminate",
        type: "number",
        unit: "kg",
        placeholder: "0.5",
        description:
          "Please input the amount of Trilaminate used in the raw materials",
        label: "Trilaminate",
      },
    ],
  },
  {
    id: 2,
    title: "Transportation to RZ Site",
    description: "",
    fields: [
      {
        name: "Truck",
        type: "number",
        unit: "km",
        placeholder: "100",
        description: "Please input the distance of road transportation",
        label: "Truck (Euro 6)",
      },
      {
        name: "sea",
        type: "number",
        unit: "NM",
        placeholder: "100",
        description: "Please input the distance of ocean transportation",
        label: "Sea",
      },
      {
        name: "rail",
        type: "number",
        unit: "NM",
        placeholder: "100",
        description: "Please input the distance of rail transportation",
        label: "Rail",
      },
      {
        name: "air",
        type: "number",
        unit: "NM",
        placeholder: "100",
        description: "Please input the distance of air transportation",
        label: "Air",
      },
    ],
  },
  {
    id: 3,
    title: "Washing Process",
    description: "",
    fields: [
      {
        name: "temp",
        type: "number",
        unit: "Celsius",
        placeholder: "71",
        description: "Please input the water temperature",
        label: "Set/Cold water temperature",
      },
      {
        name: "load",
        type: "number",
        unit: "kg",
        placeholder: "100",
        description: "Please input the water load",
        label: "Water load",
      },
      {
        name: "wash_time",
        type: "number",
        unit: "Hours",
        placeholder: "1.5",
        description: "Please input the washing time",
        label: "Actual washing time",
      },
      {
        name: "electricityGrid",
        type: "number",
        unit: "kWh",
        placeholder: "1.5",
        description: "Please input the electricity used from grid",
        label: "Electricity - grid electricity (kWh)",
      },
      {
        name: "electricityLowCarbon",
        type: "number",
        unit: "kWh",
        placeholder: "1.5",
        description: "Please input the electricity used from low carbon fuel",
        label: "Electricity - low carbon electricity (kWh)",
      },
      {
        name: "naturnalGas",
        type: "number",
        unit: "MJ",
        placeholder: "1.5",
        description: "Please input the electricity used from natural gas",
        label: "Natural gas (MJ)",
      },
      {
        name: "waterConsumption",
        type: "number",
        unit: "m<sup>3</sup>",
        placeholder: "100",
        description: "Please input the water consumption",
        label: "Water consumption",
      },
    ],
  },
  {
    id: 4,
    title: "Detergent Usage",
    description: "",
    fields: [
      {
        name: "sodiumHydroxide",
        type: "number",
        unit: "ml",
        placeholder: "10",
        description: "Please input the usage of (Sodium Hydroxide) NaOH",
        label: "Sodium hydroxide",
      },
      {
        name: "hydrogenPeroxide",
        type: "number",
        unit: "ml",
        placeholder: "10",
        description:
          "Please input the usage of (Sodium Hydroxide) H<sub>2</sub> O<sub>2</sub>",
        label: "Hydrogen peroxide",
      },
      {
        name: "citricAcid",
        type: "number",
        unit: "ml",
        placeholder: "10",
        description: `Please input the usage of (Citric Acid) HOC(CO<sub>2</sub>H)(CH<sub>2</sub>CO<sub>2</sub>H)<sub>2</sub>`,
        label: "Citric acid",
      },
      {
        name: "nonIonicDetergent",
        type: "number",
        unit: "ml",
        placeholder: "10",
        description: "Please input the usage of Non-ionic detergent",
        label: "Non-ionic detergent",
      },
    ],
  },
  {
    id: 5,
    title: "Drying Process",
    description: "",
    fields: [
      {
        name: "heatPumpGridElectricity",
        type: "number",
        unit: "kw",
        placeholder: "3",
        description: "Please input the usage of heat pump from grid",
        label: "Heat Pump Grid Electricity",
      },
      {
        name: "heatPumpLowCarbonElectricity",
        type: "number",
        unit: "kw",
        placeholder: "10",
        description:
          "Please input the usage of heat pump from low carbon electricity",
        label: "heat Pump Low Carbon Electricity",
      },
      {
        name: "electricalDryerGridElectricity",
        type: "number",
        unit: "kw",
        placeholder: "10",
        description: "Please input the usage of electrical dryer",
        label: "Electrical Dryer Grid Electricity",
      },
      {
        name: "electricalDryerLowCarbonElectricity",
        type: "number",
        unit: "kw",
        placeholder: "10",
        description: "Please input the usage of electrical dryer low carbon",
        label: "Electrical Dryer Low Carbon Electricity",
      },
    ],
  },
  {
    id: 6,
    title: "Transportation to Healthcare Facility",
    description: "",
    fields: [
      {
        name: "dieselTruck",
        type: "number",
        unit: "km",
        placeholder: "100",
        description: "Please input the distance of diesel transportation",
        label: "Diesel Truck",
      },
      {
        name: "electricTruck",
        type: "number",
        unit: "km",
        placeholder: "100",
        description: "Please input the distance of electric transportation",
        label: "Electric Truck",
      },
    ],
  },
  {
    id: 7,
    title: "Number of Uses",
    description: "",
    fields: [
      {
        name: "numUses",
        type: "number",
        unit: "Units",
        placeholder: "75",
        description: "Please input the num of uses",
        label: "Number of Uses",
      },
    ],
  },
  {
    id: 8,
    title: "End of Life",
    description: "",
    fields: [
      {
        name: "repurposing",
        type: "number",
        unit: "%",
        placeholder: "75",
        description:
          "Please input the percentage of this type of treatment, sum of different treatment shall equal to 100%",
        label: "Repurposing",
      },
      {
        name: "incinerationEnergyRecovery",
        type: "number",
        unit: "%",
        placeholder: "75",
        description:
          "Please input the percentage of this type of treatment, sum of different treatment shall equal to 100%",
        label: "Incineration with energy recovery",
      },
      {
        name: "IncinerationWithoutEnergyRecovery",
        type: "number",
        unit: "%",
        placeholder: "75",
        description:
          "Please input the percentage of this type of treatment, sum of different treatment shall equal to 100%",
        label: "Incineration without energy recovery",
      },
      {
        name: "Landfill",
        type: "number",
        unit: "%",
        placeholder: "75",
        description:
          "Please input the percentage of this type of treatment, sum of different treatment shall equal to 100%",
        label: "Landfill",
      },
    ],
  },
];

function Form() {
  const [step, setStep] = useState(0);
  const [comparison, setComparison] = useState(1);

  const nextPage = () => {
    if (step < steps.length - 1) {
      setStep((prev) => prev + 1);
    }
  };

  const previousPage = () => {
    if (step > 0) {
      setStep((prev) => prev - 1);
    }
  };

  const renderCalculator = () => {
    const calculators = [];
    for (let i = 0; i < comparison; i++) {
      calculators.push(<Calculator step={step} steps={steps} key={i} />);

      if (i < comparison - 1) {
        calculators.push(
          <div
            className="p-2 text-center transition-opacity ease-in duration-300"
            key={"seperator_" + i}
          >
            <button className="rounded-full">
              <IoIosAddCircleOutline size={50} className="text-[#888]" />
            </button>
          </div>
        );
      }
    }

    return calculators;
  };

  return (
    <>
      <div className="flex flex-row gap-8 mb-10">
        {steps.map((s, i) => (
          <div
            className={
              step >= i
                ? "border-t-4 border-[#247BCC] w-[300px]"
                : "border-t-4 border-gray-300 w-[300px]"
            }
            key={s.title}
          >
            <button
              onClick={() => setStep(i)}
              className="cursor-pointer w-full"
            >
              <h6
                className={
                  step >= i
                    ? "text-[#247BCC] mb-3 pt-4 text-start font-semibold"
                    : "text-gray-400 mb-3 pt-4 text-start font-semibold"
                }
              >{`Step ${s.id}`}</h6>
              <p
                className={
                  step >= i
                    ? "text-black-800 text-start text-sm"
                    : "text-gray-500 text-start text-sm"
                }
              >
                {s.title}
              </p>
            </button>
          </div>
        ))}
      </div>
      {renderCalculator()}

      <div className="relative mt-[-75px] p-10 mb-6 opacity-0 hover:opacity-100 text-center transition-opacity ease-in duration-300">
        <button
          className="rounded-full bg-white shadow-gray-200 shadow-lg border-gray-200 border-2"
          onClick={() => setComparison((prev) => prev + 1)}
        >
          <IoIosAddCircleOutline size={50} className="text-[#247BCC]" />
        </button>
      </div>

      <div className="flex flex-row justify-between mb-4">
        <button
          onClick={previousPage}
          className="p-4 rounded border-2 border-[#247BCC] hover:bg-blue-100 hover:border-[#247BCC] text-[#247BCC]"
        >
          <IoIosArrowBack />
        </button>
        <button
          onClick={nextPage}
          className="p-4 rounded border-2 border-[#247BCC] hover:bg-blue-100 hover:border-[#247BCC] text-[#247BCC]"
        >
          <IoIosArrowForward />
        </button>
      </div>
    </>
  );
}

export default Form;
